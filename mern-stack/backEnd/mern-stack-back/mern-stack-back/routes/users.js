var express = require('express');
var userController = require('../controllers/users')

var router = express.Router();

router.get("/", userController.getUsers);
router.post("/create", userController.createUser); // add this route

module.exports = router;