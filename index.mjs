import * as winston from "winston";

const levels = {
    performance: 0,
    emergency: 1,
    alert: 2,
    critical: 3,
    error: 4,
    warning: 5,
    notice: 6,
    info: 7,
    debug: 8, 
    data: 9
}

const baseLogger = winston.createLogger({
    level: "debug",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console()
    ],
    levels
});

export function init({level} = {}) {
    baseLogger.level = level
}

export function get(mod) {
    if (!mod) {
        return baseLogger;
    }
    
    return baseLogger.child({mod})
}
