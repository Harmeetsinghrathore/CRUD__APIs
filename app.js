// Imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
const cors = require('cors');
app.use(cors());

// Database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/SaiBaba-DB', {useNewUrlParser : true})
.then((res) => {console.log("DB Connected")})
.catch((err) => {console.log(err);});

// Import Routes
const QuoteRoutes = require('./Quotes/QuoteRoute');
const UserRoutes = require('./User/UserRoute');



app.use('/', QuoteRoutes);
app.use('/',UserRoutes);


app.listen(8000, () => {
    console.log("Server listening on the port 8000");
})