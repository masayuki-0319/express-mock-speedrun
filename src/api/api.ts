import { Express, Request, Response, Router } from 'express';

const api = (server: Express) => {
  const router = Router();

  router.get('/', async (req: Request, res: Response): Promise<void> => {
    res.send('hello world');
  });

  server.use('/', router);
};

export default api;
