import { Express } from 'express';
import { json, urlencoded } from 'body-parser';

import { requestLogger } from './logger/morgan';

const config = (server: Express) => {
  server.use(json());
  server.use(urlencoded({ extended: false }));
  server.use(requestLogger);
};

export default config;
