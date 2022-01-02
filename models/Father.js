const mongoose = require('mongoose');
const fatherSchema = new mongoose.Schema({
    name : {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    key: {
        type: String
    },
    age:{
        type: Number,
        max:124,
        min: 6
    },
    relation: {
        type: String,
    }
})

module.exports = mongoose.model('Fathers', fatherSchema);



