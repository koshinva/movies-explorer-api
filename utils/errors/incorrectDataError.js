const { ERROR_CODE_400 } = require('../typesCode');

class IncorrectDataError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_400;
  }
}

module.exports = IncorrectDataError;
