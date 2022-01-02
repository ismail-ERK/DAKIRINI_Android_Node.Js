const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
dotenv.config();
app.listen(5001,()=>{
    console.log("Server lestenin port 5001");
})
mongoose.connect(process.env.DB_CONNECT,()=>{
    console.log("Connected to db :)");

});


const authRoute = require('./routes/auth');
const fatherRoute = require('./routes/authFather');
const postRoute = require('./routes/posts');
app.use('/api/user',authRoute);
app.use('/api/father',fatherRoute);
app.use('/api/posts',postRoute);

// app.use(cors);