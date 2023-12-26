const express = require('express');

const router = express.Router();

//controller function

const{ authloginUser, authsignupUser } = require('../controllers/auth_user_controller')

//login route
router.post('/userlogin',authloginUser
)


///sign router
router.post('/usersignup',authsignupUser
)


module.exports = auth_user_router