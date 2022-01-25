var express = require('express');
var router = express.Router();
var models = require('../models/models');
var userController = require('../controller/userController');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// this api is to register employees ,if already exist return that employee. 
router.post('/user_register', userController.create);

//this api for login
router.post('/user_login', userController.login);

// jwt verification
router.get('/verify', userController.verify);

module.exports = router;
