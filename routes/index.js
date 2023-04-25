const router = require('express').Router();
// const cors = require('cors');
const routerUsers = require('./users');
const routerMovies = require('./movies');
const auth = require('../middlewares/auth');
const register = require('../controllers/register');
const login = require('../controllers/login');
const signout = require('../controllers/signout');
const NotFoundError = require('../utils/errors/notFoundError');
const { validateRegister, validateLogin } = require('../utils/validation');
// const { requestLogger, errorLogger } = require('../middlewares/logger');
// const corsOptions = require('../utils/corsOptions');
const limiter = require('../middlewares/rateLimiter');

// router.use(cors(corsOptions));

// router.use(requestLogger);

router.use(limiter);

router.post('/signup', validateRegister, register);
router.post('/signin', validateLogin, login);

router.use(auth);

router.use('/users', routerUsers);
router.use('/movies', routerMovies);
router.get('/signout', signout);

router.all('*', (req, res, next) => {
  next(new NotFoundError('Неправильно указан путь'));
});

// router.use(errorLogger);

module.exports = router;
