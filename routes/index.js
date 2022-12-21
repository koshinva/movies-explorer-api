const router = require('express').Router();
const routerUsers = require('./users');
const routerMovies = require('./movies');
const auth = require('../middlewares/auth');

router.use(auth);

router.use('/users', routerUsers);
router.use('/movies', routerMovies);

module.exports = router;
