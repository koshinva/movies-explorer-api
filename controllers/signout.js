const { SuccessExitMessage } = require('../utils/messageResponse');

module.exports = (req, res) => {
  res.clearCookie('jwt').send({ message: SuccessExitMessage });
};
