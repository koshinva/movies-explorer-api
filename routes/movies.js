const router = require('express').Router();
const { getFavoriteMovies, addMovieToFavorite, deleteMovieFromFavorite } = require('../controllers/movies');

router.get('/', getFavoriteMovies);
router.post('/', addMovieToFavorite);
router.delete('/:_id', deleteMovieFromFavorite);

module.exports = router;

// TODO: Создайте контроллер для каждого роута. Защитите роуты авторизацией:
// если клиент не прислал JWT, доступ к роутам
// ему должен быть закрыт.
