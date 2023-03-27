// const express = require('express');
import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import { indexRouter } from './routes';
import { errorFunction } from './middelwares/errorFunction';

// import wrongURl from './middelwares/wrongURl';

// mongoose connection
const mongoUrl = process.env.MONGO_URL as string;
mongoose.connect(mongoUrl);

dotenv.config();
const app : Express = express();
app.use(express.json());

app.use(indexRouter);

// main error function
app.use(errorFunction);

// app.use(wrongURl);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`The server is running on port " ${port}"`);
});
