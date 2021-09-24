import express from 'express';

import api from './api/index';
import config from './config/index';

const server = express();

api(server);
config(server);

server.listen(3000, () => {
  console.log('listening on port 3000');
});

export default server;
