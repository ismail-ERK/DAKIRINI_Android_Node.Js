const router = require('express').Router();
const User = require('../models/User');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../validation');


var jsonParser = bodyParser.json()



router.post('/register',async (req,res)=>{
    var {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);



    const salt =await bcrypt.genSalt(10);
    const hashedPassword =await bcrypt.hash(req.body.password,salt);


    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

try{
        const saveUser = await user.save();
        res.send(saveUser);
}catch (err){
        res.status(400).send(err)
}

})


router.post('/login',async (req,res)=>{
    var {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const {email,password} = req.body;

    const user = await User.findOne({email: email});
    if(!user) return res.status(400).send('Email not found');

    const valiPass = await bcrypt.compare(password,user.password);
    if(!valiPass) return res.status(400).send('Invalid password');


    //Create token
    //jwt.sign({information}, password pour securilte random)
    const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);


    // res.send("Logged in !");


})

module.exports = router;