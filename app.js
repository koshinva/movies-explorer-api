require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const routes = require('./routes/index');
const errorHandler = require('./utils/errorHandler');

const { PORT = 3000, DATA_BASE, NODE_ENV } = process.env;

const app = express();
app.use(helmet());

mongoose.connect(
  NODE_ENV === 'production'
    ? DATA_BASE
    : 'mongodb://localhost:27017/bitfilmsdb',
);
mongoose.connection.syncIndexes();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(routes);

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Server started');
});
