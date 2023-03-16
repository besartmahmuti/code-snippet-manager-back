import express, { Request, Response } from 'express';
import publicRouter from './routes/public.routes'

const app = express();
const port = process.env.PORT || 3000;

app.use('/', publicRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
