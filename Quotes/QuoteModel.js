const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
  quote_id: {
    type: String,
    required: false,
  },

  quote: {
    type: String,
    required: false,
  },
});


module.exports = new mongoose.model('Quote', QuoteSchema);