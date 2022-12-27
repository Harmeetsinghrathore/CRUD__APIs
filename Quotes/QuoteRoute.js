const Router = require('express').Router();

// Import controller
const QuoteController = require('../Quotes/QuoteController');

// Import Middlewares
const {IS_ADMIN, IS_AUTHENTICATED, IS_SUBSCRIBED} = require('../Middlewares/authMiddleware');


// APIs
Router.post('/api/add-quote', [IS_ADMIN, IS_AUTHENTICATED, QuoteController.addQuote]);
Router.get('/api/get-all-quotes', [IS_AUTHENTICATED, IS_SUBSCRIBED, QuoteController.viewAllQuotes]);
Router.get('/api/get-a-quote/:id', [IS_AUTHENTICATED, IS_SUBSCRIBED, QuoteController.viewQuote])
Router.patch('/api/edit-a-quote/:id',[IS_ADMIN, IS_AUTHENTICATED, QuoteController.editQuote]);
Router.delete('/api/delete-a-quote/:id', [IS_ADMIN, IS_AUTHENTICATED, QuoteController.deleteQuote]);

module.exports = Router;
