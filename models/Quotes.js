const mongoose = require('mongoose');



const quotesSchema = new mongoose.Schema({
    author: {
        type: String
    },
    text: {
        type: String
    }
},{versionKey:false,timestamps:true});

module.exports = mongoose.model('Quotes', quotesSchema);