const mongoose = require('mongoose');
const QuoteModel = require('../Quotes/QuoteModel');

// -------------- Add Quote -------------------------

exports.addQuote = async(req, res) => {
    try {

        const quote = await QuoteModel.create(req.body);
        quote.save();

        res.status(201).json({
            Status : 'Success',
            Message : 'Quote added successfully',
            Quote : quote
        })

        
    } catch (error) {
        console.log(error, 'error');
        res.status(500).json({
            Status : 'Error',
            Message : 'Internal Server Errors'
        })
        
    }
}

//  ------------- View all quotes --------------------

exports.viewAllQuotes = async(req, res) => {
    try {

        const quotes = await QuoteModel.find();

        if(!quotes){
            res.status(404).json({
                Status : 'Failure',
                Message : 'No quote found'
            })
        }

        res.status(200).json({
            Status : 'Success',
            Message : 'Quotes fetched successfully',
            Quotes : quotes
        })
        
    } catch (error) {
        res.status(500).json({
            Status : 'Error',
            Message : 'Internal Server Error'
        })
    }
}

// --------------  View a quote -------------------------

exports.viewQuote = async(req, res) => {
    try {

        
        const quote = await QuoteModel.findById(req.params.id);
        
        if(!quote){
            res.status(400).json({
                Status : 'Failure',
                Message : 'No quote found'
            })
        }

        res.status(200).json({
            Status : 'Success',
            Message : 'Quote fetched successfully',
            Quote : quote
        })
        
    } catch (error) {
        res.status(500).json({
            Status : 'Error',
            Message : 'Internal Server Error'
        })
    }
}


// -------------- Delete a Quote ------------------------

exports.deleteQuote = async(req, res) => {
    try {

        const quote = await QuoteModel.findById(req.params.id);

        quote.remove();

        res.status(200).json({
            Status : 'Success',
            Message : 'Quote deleted successfully'
        })
        
    } catch (error) {
        res.status(500).json({
            Status : 'Error',
            Message : 'Internal Server Error'
        })       
    }
}


// -------------- Edit a Quote --------------------------

exports.editQuote = async(req, res) => {
    try {


        let quote = await QuoteModel.findById(req.params.id);
        console.log(quote, req.params.id, 'yo man');
        
        if(!quote){
            res.status(400).json({
                Status : 'Failure',
                Message : 'No quote found'
            })
        }

        quote = await QuoteModel.findByIdAndUpdate(req.params.id, req.body, {new : true});

        quote.save();

        res.status(200).json({
            Status : 'Success',
            Message : 'Quote updated successfully',
            UpdatedQuote : quote
        })
        
    } catch (error) {
        res.status(500).json({
            Status : 'Error',
            Message : 'Internal Server Error'
        })
    }
}


