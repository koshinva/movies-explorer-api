require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes/index');
const errorHandler = require('./utils/errorHandler');

const { PORT = 3030 } = process.env;

const app = express();
mongoose.connect('mongodb://localhost:27017/bitfilmsdb');

app.use(bodyParser.json());
app.use(cookieParser());

app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Server started');
});
