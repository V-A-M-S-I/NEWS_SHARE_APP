const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});


module.exports = mongoose.model('Users', usersSchema);