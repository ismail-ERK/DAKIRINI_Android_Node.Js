const mongoose = require('mongoose');
const fatherSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,

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

    },
    relation: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        max:100000000000000000000000000000000000000000000000
    }
})

module.exports = fatherSchema;



