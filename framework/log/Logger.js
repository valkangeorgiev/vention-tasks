import AllureReporter from "@wdio/allure-reporter";
import log4js from "log4js"
import * as path from 'path'
let logger = log4js.getLogger();
let loggerTrace = log4js.getLogger('trace');
const currentDirectory = process.cwd()
const configFile = path.join(currentDirectory, '/framework/log/log4js.cfg.json');
log4js.configure(configFile);


class Logger {

    logStep(step, message) {
        logger.info(`Step ${step}: ${message}`)
        AllureReporter.addStep(`Step ${step}: ${message}`)
    }

    logTrace(message) {
        loggerTrace.trace(message)
    }

    logDebug(message) {
        logger.debug(message)
    }

    logInfo(message) {
        logger.info(message)
    }

    logWarn(message) {
        logger.warn(message)
    }

    logError(message) {
        logger.error(message)
    }

    logFatal(message) {
        logger.fatal(message)
    }
}
export default new Logger();