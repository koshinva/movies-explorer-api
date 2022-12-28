const jwt = require('jsonwebtoken');
const UnsanctionedError = require('../utils/errors/unsanctionedError');
const { AuthorizationRequiredMessage } = require('../utils/messageErrors');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return next(new UnsanctionedError(AuthorizationRequiredMessage));
  }
  let payload;
  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'secret-key',
    );
  } catch (error) {
    return next(new UnsanctionedError(AuthorizationRequiredMessage));
  }
  req.user = payload;
  return next();
};
