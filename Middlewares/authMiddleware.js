
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config('SAIBABA/.env')
const {_throw401} = require('../Services/errorHandlers');


exports.IS_ADMIN = (req, res, next) => {
    if(req.headers.is_admin != true){
        return _throw401(res, 'User not allowed.')
    }
    next();
}


exports.IS_SUBSCRIBED = (req, res, next) => {

    if(req.headers.is_subscribed != true && req.headers.is_admin != true){
        return _throw401(res, 'User not allowed.')
    }
    if(req.headers.is_admin == true || req.headers.is_subscribed == true ) {
        next();
    }


}

exports.IS_AUTHENTICATED = (req, res, next) => {


    if(!req.headers){
        return _throw401(res, 'Headers missing.')
    }


    if(!req.headers.authorization){
        return _throw401(res, 'Authorization required!')
    }


    try {
        token_type = req.headers.authorization.split(" ")[0];
        token = req.headers.authorization.split(" ")[1];

        
    } catch (error) {
        return _throw401(res, 'Invalid Token!')
    }

    if(!token) {
        return _throw401(res, 'Token is missing.')
    }

    if (token_type != 'Bearer') {
        return _throw401(res, 'Invalid token type')
    }

    // Validate refresh token 

    if (req.body.token_name == 'refresh token') {
        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
            if (err) {
                return _throw401(res, 'Refresh token Invalid!')
            }
            next();
        })
    }else {
            // Validate access token 

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) {
            return _throw401(res, 'Access token invalid!')
        }

        next();
    })
    }








}

