const { ERROR_CODE_403 } = require('../typesCode');

class AccessRestrictionError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_403;
  }
}
module.exports = AccessRestrictionError;
