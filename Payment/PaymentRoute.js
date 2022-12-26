const Router = require('express').Router();
const razorpay = require('razorpay');


// --- Import controller -----
const paymentController = require('./PaymentController');

// --- APIs ---
Router.post('/api/payment-order', [paymentController.createOrder]);
Router.post('/api/payment-verify', [paymentController.verifyPayment]);



module.exports = Router;
