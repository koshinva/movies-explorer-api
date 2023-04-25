const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');
const { SuccessfulAuthMessage } = require('../utils/messageResponse');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  UserModel.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'secret-key',
        {
          expiresIn: '7d',
        },
      );
      res
        .cookie('jwt', token, {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          sameSite: 'None',
          secure: true,
        })
        .send({ message: SuccessfulAuthMessage });
    })
    .catch(next);
};
