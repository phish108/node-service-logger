import * as winston from "winston";

const levels = {
    emerg: 0, 
    alert: 1,
    crit: 2,
    error: 3,
    warning: 4,
    notice: 5,
    info: 6,
    debug: 7, 
    silly: 8
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

export function init(level) {
    baseLogger.level = level
}

export function get(mod) {
    return baseLogger.child({mod})
}
