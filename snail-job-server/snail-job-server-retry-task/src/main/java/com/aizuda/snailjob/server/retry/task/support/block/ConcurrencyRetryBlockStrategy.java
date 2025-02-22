package com.aizuda.snailjob.server.retry.task.support.block;

import com.aizuda.snailjob.common.core.enums.RetryBlockStrategyEnum;
import com.aizuda.snailjob.server.retry.task.dto.RetryTaskGeneratorDTO;
import com.aizuda.snailjob.server.retry.task.support.RetryTaskConverter;
import com.aizuda.snailjob.server.retry.task.support.generator.task.RetryTaskGeneratorHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * @author: opensnail
 * @date : 2025-02-10
 * @since : sj_1.4.0
 */
@Component
@RequiredArgsConstructor
public class ConcurrencyRetryBlockStrategy extends AbstracJobBlockStrategy {
    private final RetryTaskGeneratorHandler retryTaskGeneratorHandler;

    @Override
    public void doBlock(final BlockStrategyContext context) {
        // 重新生成任务
        RetryTaskGeneratorDTO generatorDTO = RetryTaskConverter.INSTANCE.toRetryTaskGeneratorDTO(context);
        retryTaskGeneratorHandler.generateRetryTask(generatorDTO);
    }

    @Override
    protected RetryBlockStrategyEnum blockStrategyEnum() {
        return RetryBlockStrategyEnum.CONCURRENCY;
    }
}
