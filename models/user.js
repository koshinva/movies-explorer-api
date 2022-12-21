const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const UnsanctionedError = require('../utils/errors/unsanctionedError');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Некорректный email',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(
  email,
  password,
) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new UnsanctionedError('Неверные почта или пароль');
      }
      return bcrypt.hash(password, user.password).then((matched) => {
        if (!matched) {
          throw new UnsanctionedError('Неверные почта или пароль');
        }
        return user;
      });
    });
};

module.exports = mongoose.model('user', userSchema);
