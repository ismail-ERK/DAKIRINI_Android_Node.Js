const router = require('express').Router();
const Father = require('../models/Father');
const User = require('../models/User');
const bodyParser = require('body-parser');
const verify = require('../middlewares/verifyToken');
const {registerValidation,loginValidation} = require("../verifications/validationFather");
const cors = require("cors");
const {registerFaher, loginFather} = require("../controllers/AuthController");





router.post('/register',cors(),verify,async (req,res)=>{
    await registerFaher(res,res);

})


router.post('/login',cors(),async (req,res)=>{
    await loginFather(req,res);

})

module.exports = router;
