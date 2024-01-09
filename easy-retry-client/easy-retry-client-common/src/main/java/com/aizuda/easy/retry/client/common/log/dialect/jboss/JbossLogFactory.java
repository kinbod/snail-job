package com.aizuda.easy.retry.client.common.log.dialect.jboss;

import com.aizuda.easy.retry.client.common.log.Log;
import com.aizuda.easy.retry.client.common.log.LogFactory;

/**
 * <a href="https://github.com/jboss-logging">Jboss-Logging</a> log.
 *
 * @author wodeyangzipingpingwuqi
 */
public class JbossLogFactory extends LogFactory {

    /**
     * 构造
     */
    public JbossLogFactory() {
        super("JBoss Logging");
        checkLogExist(org.jboss.logging.Logger.class);
    }

    @Override
    public Log createLog(String name) {
        return new JbossLog(name);
    }

    @Override
    public Log createLog(Class<?> clazz) {
        return new JbossLog(clazz);
    }

}
