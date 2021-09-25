import { Express } from 'express';
import { json, urlencoded } from 'body-parser';

import { RequestLogger } from './logger/morgan';

const config = (server: Express) => {
  server.use(json());
  server.use(urlencoded({ extended: false }));
  server.use(RequestLogger);
};

export default config;
