const dotenv = require('dotenv');
dotenv.config('SAIBABA/.env');
const mongoose = require('mongoose');
const userModel = require('./UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');




// ---------- Add user ----------------- 

exports.registerUser =  async(req, res) => {
    try {

        req.body.password = await bcrypt.hash(req.body.password, 10);

        const user = await userModel.create(req.body);
        user.save();

        // ------ Generate access and refresh token -----

        const {username, is_admin, email} = req.body;

        console.log('wokring bro');
        const accessToken = jwt.sign({username, is_admin, email}, process.env.ACCESS_TOKEN_SECRET, { expiresIn : '1d'});
        const refreshToken = jwt.sign({username, is_admin, email}, process.env.REFRESH_TOKEN_SECRET, {expiresIn : '7d'});


        res.status(201).json({
            Status : 'Success',
            Message : 'New user created',
            User : user,
            AccessToken : accessToken,
            RefreshToken : refreshToken
        })
        
    } catch (error) {
        res.status(500).json({
            Status : 'Error',
            Message : 'Internal Server Error'
        })
    }
}
// ---------- Login user ----------------- 

exports.loginUser = async(req, res) => {
    try {

        const {username, password} = req.body;

        // --- Check if the user have give both username and password

        if(!username || !password){
            return res.status(401).json({
                Status : 'Failure',
                Message : 'Please enter email and password'
            })
        }

        // --- Finding email in the database -------

        const user = await userModel.findOne({username});

        if(!user){
            return res.status(404).json({
                Status : 'Failure',
                Message : 'Invalid email or password'
            })
        }

        // --- Check if the password is correct ----

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if(!isPasswordMatched){
            return res.status(404).json({
                Status : 'Failure',
                Message : 'Invalid email or password'
            })
        }
        
        const is_admin = user.is_admin;
        const email = user.email;

        // ------ Generate access and refresh token -----

        const accessToken = jwt.sign({username,is_admin, email}, process.env.ACCESS_TOKEN_SECRET, { expiresIn : '1d'});
        const refreshToken = jwt.sign({username,is_admin, email}, process.env.REFRESH_TOKEN_SECRET, {expiresIn : '7d'});

        res.status(200).json({
            Status : 'Success',
            Message : 'Login successfull',
            AccessToken : accessToken,
            RefreshToken : refreshToken
        })

    } catch (error) {
        res.status(500).json({
            Status : 'Error',
            Message : 'Internal Server Error'
        })     
    }
}


// ---------- Get a user ----------------- 

exports.getUser = async(req, res) => {
    try {

        const user = await userModel.findById(req.params.id);
        if(!user){
            res.status(400).json({
                Status : 'Failure',
                Message : 'User not found'
            })
        }

        res.status(200).json({
            Status : 'Success',
            Message : 'User fetched successfully',
            User : user
        })
        
        
    } catch (error) {
        res.status(500).json({
            Status : 'Error',
            Message : 'Internal Server Error'
        })
    }
}

// ---------- Get all users ----------------- 

exports.getAllUsers = async(req, res) => {
    try {

        const users = await userModel.find();
        if(!users){
            res.status(400).json({
                Status : 'Failure',
                Message : 'Users not found'
            })
        }

        res.status(200).json({
            Status : 'Success',
            Message : 'Users fetched successfully',
            User : users
        })
        
    } catch (error) {
        res.status(500).json({
            Status : 'Error',
            Message : 'Internal Server Error'
        })
    }
}

// ---------- Renew access Token --------

exports.renewAccessToken = async (req, res) => {
    try {

        const {username, email, is_admin} = req.body;

        // ------ Generate a new access token ------

        const accessToken = jwt.sign({username, email, is_admin}, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '1d'});
        const refreshToken = jwt.sign({username, email, is_admin}, process.env.REFRESH_TOKEN_SECRET, {expiresIn : '7d'});

        res.status(200).json({
            Status : 'Success',
            Message : 'Access token renewed',
            AccessToken : accessToken,
            RefreshToken : refreshToken
        })
        
    } catch (error) {
        res.status(500).json({
            Status : 'Error',
            Message : 'Internal Server Error',
            
        })
    }
}


// ----------  Forget Password ----------

exports.forgetPassword = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            Status : 'Error',
            Message : 'Internal Server Error'
        })
    }
}


