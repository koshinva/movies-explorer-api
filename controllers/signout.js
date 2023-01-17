const { SuccessExitMessage } = require('../utils/messageResponse');

const { NODE_ENV } = process.env;

module.exports = (req, res) => {
  res
    .clearCookie('jwt', { sameSite: 'None', secure: NODE_ENV === 'production' })
    .send({ message: SuccessExitMessage });
};
