const router = require('express').Router();
const { getFavoriteMovies, addMovieToFavorite, deleteMovieFromFavorite } = require('../controllers/movies');

router.get('/', getFavoriteMovies);
router.post('/', addMovieToFavorite);
router.delete('/:_id', deleteMovieFromFavorite);

module.exports = router;
