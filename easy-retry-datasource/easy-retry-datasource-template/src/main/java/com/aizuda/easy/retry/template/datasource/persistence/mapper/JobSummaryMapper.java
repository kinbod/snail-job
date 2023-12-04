package com.aizuda.easy.retry.template.datasource.persistence.mapper;

import com.aizuda.easy.retry.template.datasource.persistence.dataobject.DashboardCardResponseDO;
import com.aizuda.easy.retry.template.datasource.persistence.dataobject.DashboardLineResponseDO;
import com.aizuda.easy.retry.template.datasource.persistence.dataobject.DashboardRetryLineResponseDO;
import com.aizuda.easy.retry.template.datasource.persistence.po.JobSummary;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.time.LocalDateTime;
import java.util.List;

/**
 * @author zhengweilin
 * @version 1.0.0
 * @date 2023/11/22
 */
@Mapper
public interface JobSummaryMapper extends BaseMapper<JobSummary> {

    int insertBatchJobSummary(@Param("list") List<JobSummary> list);

    int updateBatchTriggerAtById(@Param("list") List<JobSummary> list);

    IPage<DashboardRetryLineResponseDO.Task> jobTaskList(@Param("namespaceId") String namespaceId, Page<Object> page);

    List<DashboardLineResponseDO> jobLineList(@Param("namespaceId") String namespaceId,
                                              @Param("type") String type,
                                              @Param("from") LocalDateTime from,
                                              @Param("to") LocalDateTime to);

    DashboardCardResponseDO.JobTask toJobTask(@Param("namespaceId") String namespaceId);

    List<DashboardRetryLineResponseDO.Rank> dashboardRank(@Param("namespaceId") String namespaceId,
                                                          @Param("groupName") String groupName,
                                                          @Param("startTime") LocalDateTime startTime,
                                                          @Param("endTime") LocalDateTime endTime
    );
}
