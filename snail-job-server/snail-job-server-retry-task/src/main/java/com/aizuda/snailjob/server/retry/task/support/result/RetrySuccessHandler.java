package com.aizuda.snailjob.server.retry.task.support.result;

import cn.hutool.core.lang.Assert;
import com.aizuda.snailjob.common.core.enums.RetryResultStatusEnum;
import com.aizuda.snailjob.common.core.enums.RetryStatusEnum;
import com.aizuda.snailjob.common.core.enums.RetryTaskStatusEnum;
import com.aizuda.snailjob.server.common.exception.SnailJobServerException;
import com.aizuda.snailjob.server.retry.task.support.RetryResultHandler;
import com.aizuda.snailjob.server.retry.task.support.handler.CallbackRetryTaskHandler;
import com.aizuda.snailjob.template.datasource.access.AccessTemplate;
import com.aizuda.snailjob.template.datasource.persistence.mapper.RetryMapper;
import com.aizuda.snailjob.template.datasource.persistence.mapper.RetryTaskMapper;
import com.aizuda.snailjob.template.datasource.persistence.po.Retry;
import com.aizuda.snailjob.template.datasource.persistence.po.RetrySceneConfig;
import com.aizuda.snailjob.template.datasource.persistence.po.RetryTask;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.transaction.support.TransactionTemplate;

import java.time.LocalDateTime;
import java.util.Objects;

/**
 * <p>
 *
 * </p>
 *
 * @author opensnail
 * @date 2025-02-02
 */
@Component
@RequiredArgsConstructor
public class RetrySuccessHandler extends AbstractRetryResultHandler {
    private final TransactionTemplate transactionTemplate;
    private final AccessTemplate accessTemplate;
    private final CallbackRetryTaskHandler callbackRetryTaskHandler;
    private final RetryTaskMapper retryTaskMapper;
    private final RetryMapper retryMapper;

    @Override
    public boolean supports(RetryResultContext context) {
        return Objects.equals(RetryResultStatusEnum.SUCCESS.getStatus(), context.getResultStatus());
    }

    @Override
    public void doHandler(RetryResultContext context) {
        // 超过最大等级
        RetrySceneConfig retrySceneConfig =
                accessTemplate.getSceneConfigAccess().getSceneConfigByGroupNameAndSceneName(
                        context.getGroupName(), context.getSceneName(), context.getNamespaceId());
        Retry retry = retryMapper.selectById(context.getRetryId());

        transactionTemplate.execute(new TransactionCallbackWithoutResult() {
            @Override
            protected void doInTransactionWithoutResult(TransactionStatus status) {
                retry.setRetryStatus(RetryStatusEnum.FINISH.getStatus());
                retry.setUpdateDt(LocalDateTime.now());
                retry.setRetryCount(retry.getRetryCount() + 1);
                retry.setDeleted(retry.getId());
                Assert.isTrue(1 == retryMapper.updateById(retry),
                        () -> new SnailJobServerException("更新重试任务失败. groupName:[{}]",
                                retry.getGroupName()));

                RetryTask retryTask = new RetryTask();
                retryTask.setId(context.getRetryTaskId());
                retryTask.setTaskStatus(RetryTaskStatusEnum.SUCCESS.getStatus());
                Assert.isTrue(1 == retryTaskMapper.updateById(retryTask),
                        () -> new SnailJobServerException("更新重试任务失败. groupName:[{}]", retry.getGroupName()));

                // 创建一个回调任务
                callbackRetryTaskHandler.create(retry, retrySceneConfig);


            }
        });
    }
}
