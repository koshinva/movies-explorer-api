const { NODE_ENV, DATA_BASE } = process.env;

module.exports = (
  NODE_ENV === 'production'
    ? DATA_BASE
    : 'mongodb://localhost:27017/bitfilmsdb');
