import express from 'express';
import { json, urlencoded } from 'body-parser';

import api from './api/index';

const server = express();

server.use(json());
server.use(urlencoded({ extended: false }));

api(server);

server.listen(3000, () => {
  console.log('listening on port 3000');
});

export default server;
