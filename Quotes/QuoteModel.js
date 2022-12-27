const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
  quote_id: {
    type: String,
    required: true,
  },

  quote_by : {
    type : String,
    required : true
  },

  quote: {
    type: String,
    required: true,
  },
});


module.exports = new mongoose.model('Quote', QuoteSchema);