import express from 'express';

import api from './api/index';
import config from './config/index';

const server = express();

config(server);
api(server);

server.listen(3000, () => {
  console.log('listening on port 3000');
});

export default server;
