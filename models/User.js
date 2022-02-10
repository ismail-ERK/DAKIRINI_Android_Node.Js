const mongoose = require('mongoose');
const fatherSchema = require('../models/FatherSchema');
const {type} = require("@hapi/joi/lib/extend");
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max:255,
        min: 6
    },
    password:{
        type: String,
        required:true,
        max:1024,
        min: 6
    },
    image:{
        type: String,
        required:true
    },
    fathers:[fatherSchema],
    date: {
        type: Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('User', userSchema);



