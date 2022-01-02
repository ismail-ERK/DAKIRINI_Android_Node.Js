const mongoose = require('mongoose');
const fatherSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    key: {
        type: String,
        required: true,
        max:255,
        min: 6
    },
    age:{
        type: Number,
        required:true,
        max:124,
        min: 6
    },
    relation: {
        type: String,
        required: true
    }
})

module.exports = fatherSchema;



