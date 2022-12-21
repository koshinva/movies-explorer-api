const UserModel = require('../models/user');
const IncorrectDataError = require('../utils/errors/incorrectDataError');

module.exports.getInfoAboutUser = (req, res, next) => {
  const { _id } = req.user;
  UserModel.findById(_id)
    .then((user) => {
      res.send({ data: user });
    })
    .catch(next);
};
module.exports.updateInfoUser = (req, res, next) => {
  const { name, email } = req.body;
  const { _id } = req.user;
  UserModel.findByIdAndUpdate(
    _id,
    { name, email },
    { new: true, runValidators: true },
  )
    .then((user) => {
      res.send({ data: user });
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        return next(
          new IncorrectDataError(
            'Переданы некорректные данные для обновления данных профиля',
          ),
        );
      }
      return next(error);
    });
};
