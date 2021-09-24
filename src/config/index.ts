import { Express } from 'express';
import { json, urlencoded } from 'body-parser';

const config = (server: Express) => {
  server.use(json());
  server.use(urlencoded({ extended: false }));
};

export default config;
