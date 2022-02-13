const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const messageRouters=require('./routes/MessagesRoute')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();
app.listen(5000,()=>{
    console.log("Server lestenin port 5000");
})
mongoose.connect(process.env.DB_CONNECT,()=>{
    console.log("Connected to db :)");

});


const authRoute = require('./routes/auth');
const fatherRoute = require('./routes/authFather');
const crudFatherRoute = require('./routes/CrudFather');
const postRoute = require('./middlewares/posts');
const sampleRoute = require('./routes/sampleRoute');
app.use('/api/users',authRoute);
app.use('/api/father',fatherRoute);
app.use('/api/fathers',crudFatherRoute);
app.use('/api/posts',postRoute);
app.use('/',sampleRoute);
app.use(express.json())
app.use('/api/message',messageRouters)

const contactRoute = require("./routes/ContactRoute.js");
const sonRoute = require("./routes/SonRoute.js");

app.use("/contacts", contactRoute);
app.use("/sons", sonRoute);

// app.use(cors);

