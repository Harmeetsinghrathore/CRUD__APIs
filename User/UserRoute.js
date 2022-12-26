const Router = require('express').Router();

// Import Controller 
const userController = require('./UserController');

// Import Middlewares
const {IS_ADMIN, IS_AUTHENTICATED} = require('../Middlewares/authMiddleware');



// APIs
Router.post('/api/register-user', [userController.registerUser]);
Router.post('/api/login-user', [userController.loginUser]);
Router.get('/api/get-a-user/:id', [IS_ADMIN, userController.getUser]);
Router.get('/api/get-all-users', [IS_ADMIN, userController.getAllUsers]);

Router.post('/api/renew-access-token', [IS_AUTHENTICATED, userController.renewAccessToken]); // send refresh token

// ------ PENDING ----------
Router.post('/api/forget-password', [userController.forgetPassword]);


module.exports = Router;