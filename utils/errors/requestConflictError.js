const { ERROR_CODE_409 } = require('../typesCode');

class RequestConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_409;
  }
}
module.exports = RequestConflictError;
