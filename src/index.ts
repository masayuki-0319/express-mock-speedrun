import express from 'express';

import api from './api/api';
import config from './config/config';
import { logger } from './config/logger/winston';

const server = express();

config(server);
api(server);

server.listen(3000, () => {
  logger.info('listening on port 3000');
});

export default server;
