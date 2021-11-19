var express = require('express');
var router = express.Router();
var User = require("../models/model");
var {users,adduser,getUserById,createUser,updateUser,deleteUser} = require('../controller/index');

/* GET home page. */
router.get('/', users);

//GET adduser page
router.get('/adduser',adduser);

//Update particular user details
router.get('/updateuser/:id',getUserById );

//POST request for creating a new user
router.post('/createuser',createUser);

//POST request for updating user details
router.post('/updateuser/:id',updateUser);

router.delete('/delete/:id',deleteUser);

module.exports = router;
