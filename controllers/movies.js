const MovieModel = require('../models/movie');
const AccessRestrictionError = require('../utils/errors/accessRestrictionError');
const IncorrectDataError = require('../utils/errors/incorrectDataError');
const NotFoundError = require('../utils/errors/notFoundError');
const { IncorrectDataMessage, NotFoundByIdMessage, NoRightsToDeleteMessage } = require('../utils/messageErrors');
const { SuccessDeleteMessage } = require('../utils/messageResponse');
const { STATUS_CODE_201 } = require('../utils/typesCode');

module.exports.getFavoriteMovies = (req, res, next) => {
  const { _id } = req.user;
  MovieModel.find({ owner: _id })
    .then((movies) => {
      res.send({ data: movies });
    })
    .catch(next);
};
module.exports.addMovieToFavorite = (req, res, next) => {
  const { trailer: trailerLink, ...reqBody } = req.body;
  MovieModel.create({
    ...reqBody,
    trailerLink,
    owner: req.user._id,
  })
    .then((movie) => {
      res.status(STATUS_CODE_201).send({ data: movie });
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        return next(new IncorrectDataError(IncorrectDataMessage));
      }
      return next(error);
    });
};
module.exports.deleteMovieFromFavorite = (req, res, next) => {
  const { _id } = req.params;
  MovieModel.findById(_id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(NotFoundByIdMessage);
      }
      if (movie.owner.toString() !== req.user._id) {
        throw new AccessRestrictionError(NoRightsToDeleteMessage);
      }
      return movie.remove().then(() => {
        res.send({ message: SuccessDeleteMessage });
      });
    })
    .catch((error) => {
      if (error.name === 'CastError') {
        return next(
          new IncorrectDataError(IncorrectDataMessage),
        );
      }
      return next(error);
    });
};
