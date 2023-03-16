import express, {  Express } from 'express';

import publicRouter from './routes/public.routes'

const app: Express = express();

app.use('/', publicRouter)

export default app;
