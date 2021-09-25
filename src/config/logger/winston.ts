import path from 'path';
import winston, { LoggerOptions } from 'winston';

const LOG_DIR = path.join(__dirname, '../../log');
const APP_ENV = process.env.NODE_ENV || 'development';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const isDevelopment = APP_ENV === 'development';

  return isDevelopment ? 'debug' : 'http';
};

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf((log) => `${log.timestamp},${log.level},${log.message}`)
);

const APPLICATION_LOGFILE = `${LOG_DIR}/${APP_ENV}.log`;
const ERROR_LOGFILE = `${LOG_DIR}/${APP_ENV}.error.log`;
const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: ERROR_LOGFILE,
    level: 'error',
  }),
  new winston.transports.File({ filename: APPLICATION_LOGFILE }),
];

const loggerOptions: LoggerOptions = {
  level: level(),
  levels,
  format,
  transports,
};

const levelColorOption = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(levelColorOption);
const logger = winston.createLogger(loggerOptions);

export { logger };
