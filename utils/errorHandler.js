const { ERROR_CODE_500 } = require('./typesCode');

const errorHandler = (err, req, res, next) => {
  const { statusCode = ERROR_CODE_500, message } = err;
  res.status(statusCode).send({
    message: statusCode === ERROR_CODE_500 ? 'Ошибка сервера' : message,
  });
  next();
};

module.exports = errorHandler;
