import express, {  Express } from 'express'
import { connectToDatabase } from './lib/dbConfig'

import publicRouter from './routes/public.routes'
import snippetRouter from './routes/snippet.routes'
import userRouter from './routes/user.routes'

const app: Express = express();

connectToDatabase();

app.use('/', publicRouter)
app.use('/snippet', snippetRouter)
app.use('/user', userRouter)
export default app;
