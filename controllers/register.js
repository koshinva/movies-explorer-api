const bcrypt = require('bcrypt');
const UserModel = require('../models/user');
const IncorrectDataError = require('../utils/errors/incorrectDataError');
const RequestConflictError = require('../utils/errors/requestConflictError');
const {
  IncorrectDataMessage,
  EmailAlreadyExistsMessage,
} = require('../utils/messageErrors');
const { STATUS_CODE_201 } = require('../utils/typesCode');

module.exports = (req, res, next) => {
  const { email, password, name } = req.body;

  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(password, salt))
    .then((passwordHash) => {
      UserModel.create({ email, name, password: passwordHash })
        .then((user) => {
          res.status(STATUS_CODE_201).send({
            data: { name: user.name, email: user.email, _id: user._id },
          });
        })
        .catch((error) => {
          if (error.code === 11000) {
            return next(new RequestConflictError(EmailAlreadyExistsMessage));
          }
          if (error.name === 'ValidationError') {
            return next(new IncorrectDataError(IncorrectDataMessage));
          }
          return next(error);
        });
    })
    .catch(next);
};
