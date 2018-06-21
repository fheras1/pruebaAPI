const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');

router.get('/signup', usersController.signup);
router.post('/signup', usersController.create);
router.get('/login', usersController.login);

module.exports = router;
