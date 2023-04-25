require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const routes = require('./routes');
const errorHandler = require('./utils/errorHandler');
const dataBaseServer = require('./utils/dataBaseServer');

const { PORT = 3000 } = process.env;

const app = express();
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

// app.set('trust proxy', 1);

mongoose.connect(dataBaseServer);
mongoose.connection.syncIndexes();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(routes);

app.use(errors());
app.use(errorHandler);

app.listen(PORT);
