import log4js from "log4js"
import * as path from 'path'
let logger = log4js.getLogger();
const currentDirectory = process.cwd()
const configFile = path.join(currentDirectory, '/framework/log/configuration.json'); 

log4js.configure(configFile);


class Logger{

    logSteps(step, message){
        logger.info(`Step ${step}: ${message}`)
    }
    
    logTrace(message){
        logger.trace(message)
    }

    logDebug(message){
        logger.debug(message)
    }

    logInfo(message){
        logger.info(message)
    }

    logWarn(message){
        logger.warn(message)
    }

    logError(message){
        logger.error(message)
    }

    logFatal(message){
        logger.fatal(message)
    } 
}
export default new Logger;