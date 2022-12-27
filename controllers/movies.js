const MovieModel = require('../models/movie');
const AccessRestrictionError = require('../utils/errors/accessRestrictionError');
const IncorrectDataError = require('../utils/errors/incorrectDataError');
const NotFoundError = require('../utils/errors/notFoundError');
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
  const owner = req.user._id;
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;
  MovieModel.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink: trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner,
  })
    .then((movie) => {
      res.status(STATUS_CODE_201).send({ data: movie });
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        return next(
          new IncorrectDataError(
            'Переданы некорректные данные для добавления нового фильма',
          ),
        );
      }
      return next(error);
    });
};
module.exports.deleteMovieFromFavorite = (req, res, next) => {
  const { _id } = req.params;
  MovieModel.findById(_id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Карточка с указанным id не найдена');
      }
      if (movie.owner.toString() !== req.user._id) {
        throw new AccessRestrictionError(
          'Нет прав удалить фильм другого пользователя',
        );
      }
      return movie.remove().send({ message: 'Фильм успешно удален' });
    })
    .catch((error) => {
      if (error.name === 'CastError') {
        return next(
          new IncorrectDataError(
            'Переданы некорректные данные для удаления фильма',
          ),
        );
      }
      return next(error);
    });
};
