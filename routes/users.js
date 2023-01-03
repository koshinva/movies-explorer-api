const router = require('express').Router();
const { getInfoAboutUser, updateInfoUser } = require('../controllers/users');
const { validateUpdateInfoUser } = require('../utils/validation');

router.get('/me', getInfoAboutUser);
router.patch('/me', validateUpdateInfoUser, updateInfoUser);

module.exports = router;
