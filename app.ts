require('dotenv').config()
import express, {  Express } from 'express'
import { connectToDatabase } from './lib/dbConfig'

import publicRouter from './routes/public.routes'
import snippetRouter from './routes/snippet.routes'
import userRouter from './routes/user.routes'
import authRouter from './routes/auth.routes'
import bodyParser from 'body-parser' 

const app: Express = express();

connectToDatabase();

app.use(bodyParser.json());
app.use('/', publicRouter)
app.use('/snippet', snippetRouter)
app.use('/user', userRouter)
app.use('/auth', authRouter )
export default app;
