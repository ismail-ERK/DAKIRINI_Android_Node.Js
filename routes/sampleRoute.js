const router = require('express').Router();
const User = require('../models/User');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../verifications/validation');
const cors = require('cors')

router.get('/',cors(),(req,res)=>{
    res.send("Hello")
})

module.exports = router;
