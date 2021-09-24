import express from 'express';
import { json, urlencoded } from 'body-parser';

const server = express();
const router = express.Router();

server.use(json());
server.use(urlencoded({ extended: false }));

router.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.send('hello world');
  }
);

server.use('/', router);

server.listen(3000, () => {
  console.log('listening on port 3000');
});

export default server;
