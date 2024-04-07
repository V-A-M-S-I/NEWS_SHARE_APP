const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    image:{
        type:String,
        required : true
    },
    date: {
        type: Date,
        required: true
    },
    published: {
        type: String,
        required: true
    },
    title: {
        type : String,
        required : true
    },
    department: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    link: {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('News', newsSchema);
