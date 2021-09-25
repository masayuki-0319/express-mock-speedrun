import morgan, { StreamOptions } from 'morgan';

import { logger } from './winston';

const stream: StreamOptions = {
  write: (message) => {
    logger.http(message);
  },
};

const skip = () => {
  const env = process.env.NODE_ENV || 'development';

  return env !== 'development';
};

const format = ':method :url :status :res[content-length] - :response-time ms';
const RequestLogger = morgan(format, {
  stream,
  skip,
});

export { RequestLogger };
