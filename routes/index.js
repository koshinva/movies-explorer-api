const router = require('express').Router();
const routerUsers = require('./users');
const routerMovies = require('./movies');
const auth = require('../middlewares/auth');
const register = require('../controllers/register');
const login = require('../controllers/login');
const signout = require('../controllers/signout');
const NotFoundError = require('../utils/errors/notFoundError');

router.post('/signup', register);
router.post('/signin', login);

router.use(auth);

router.use('/users', routerUsers);
router.use('/movies', routerMovies);
router.get('/signout', signout);

router.all('*', (req, res, next) => {
  next(new NotFoundError('Неправильно указан путь'));
});

module.exports = router;
