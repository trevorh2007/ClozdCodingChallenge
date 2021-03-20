const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/users', controllers.getUsers);

module.exports = router;