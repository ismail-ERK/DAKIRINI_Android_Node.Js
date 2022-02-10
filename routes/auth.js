const router = require('express').Router();
const User = require('../models/User');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../verifications/validation');
const cors = require('cors')
const {registerSon, loginSon} = require("../controllers/AuthController");



router.post('/register',cors(),async (req,res)=>{

    await registerSon(req,res);
})


router.post('/login',cors(),async (req,res)=>{
    await loginSon(req,res)
})

module.exports = router;
