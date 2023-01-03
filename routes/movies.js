const router = require('express').Router();
const { getFavoriteMovies, addMovieToFavorite, deleteMovieFromFavorite } = require('../controllers/movies');
const { validateAddMovieToFavorite, validateDeleteMovieFromFavorite } = require('../utils/validation');

router.get('/', getFavoriteMovies);
router.post('/', validateAddMovieToFavorite, addMovieToFavorite);
router.delete('/:_id', validateDeleteMovieFromFavorite, deleteMovieFromFavorite);

module.exports = router;
