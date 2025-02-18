package com.aizuda.snailjob.server.retry.task.support.handler;

import akka.actor.ActorRef;
import cn.hutool.core.lang.Assert;
import com.aizuda.snailjob.common.core.enums.RetryResultStatusEnum;
import com.aizuda.snailjob.common.core.enums.RetryTaskStatusEnum;
import com.aizuda.snailjob.server.common.akka.ActorGenerator;
import com.aizuda.snailjob.server.common.exception.SnailJobServerException;
import com.aizuda.snailjob.server.retry.task.dto.RequestRetryExecutorDTO;
import com.aizuda.snailjob.server.retry.task.dto.RetryExecutorResultDTO;
import com.aizuda.snailjob.server.retry.task.dto.TaskStopJobDTO;
import com.aizuda.snailjob.server.retry.task.support.RetryTaskConverter;
import com.aizuda.snailjob.template.datasource.persistence.mapper.RetryTaskMapper;
import com.aizuda.snailjob.template.datasource.persistence.po.RetryTask;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * <p>
 *
 * </p>
 *
 * @author opensnail
 * @date 2025-02-10
 */
@Component
@RequiredArgsConstructor
public class RetryTaskStopHandler {
    private final RetryTaskMapper retryTaskMapper;

    /**
     * 执行停止任务
     *
     * @param stopJobDTO
     */
    public void stop(TaskStopJobDTO stopJobDTO) {

        RetryTask retryTask = new RetryTask();
        retryTask.setId(stopJobDTO.getRetryTaskId());
        retryTask.setTaskStatus(RetryTaskStatusEnum.STOP.getStatus());
        retryTask.setOperationReason(stopJobDTO.getOperationReason());
        Assert.isTrue(1 == retryTaskMapper.updateById(retryTask), () -> new SnailJobServerException("update retry task failed"));

        RequestRetryExecutorDTO executorDTO = RetryTaskConverter.INSTANCE.toRealRetryExecutorDTO(stopJobDTO);
        ActorRef actorRef = ActorGenerator.stopRetryTaskActor();
        actorRef.tell(executorDTO, actorRef);

        // 更新结果为失败
        doHandleResult(stopJobDTO);
    }

    private static void doHandleResult(TaskStopJobDTO stopJobDTO) {
        if (!stopJobDTO.isNeedUpdateTaskStatus()) {
            return;
        }
        RetryExecutorResultDTO executorResultDTO = RetryTaskConverter.INSTANCE.toRetryExecutorResultDTO(stopJobDTO);
        executorResultDTO.setExceptionMsg(stopJobDTO.getMessage());
        executorResultDTO.setResultStatus(RetryResultStatusEnum.FAILURE);
        ActorRef actorRef = ActorGenerator.retryTaskExecutorResultActor();
        actorRef.tell(executorResultDTO, actorRef);
    }


}
