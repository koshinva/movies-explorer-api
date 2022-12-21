const router = require('express').Router();
const { getInfoAboutUser, updateInfoUser } = require('../controllers/users');

router.get('/me', getInfoAboutUser);
router.patch('/me', updateInfoUser);

module.exports = router;
