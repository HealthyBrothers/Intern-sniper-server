import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const authRoute = require('./routes/AuthRoute')
// app routes
app.use('/auth', authRoute)


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});