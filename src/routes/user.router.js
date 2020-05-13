const { Router } = require('express');
const { saveUser, getUser } = require('../controllers/users.controllers');
const router = Router();

router.post('/', saveUser);
router.get('/', getUser);

module.exports = router;
