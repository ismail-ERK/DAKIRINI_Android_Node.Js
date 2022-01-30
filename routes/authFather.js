const router = require('express').Router();
const Father = require('../models/Father');
const User = require('../models/User');
const bodyParser = require('body-parser');
const verify = require('./verifyToken');
const {registerValidation,loginValidation} = require("../validationFather");
const cors = require("cors");





router.post('/register',cors(),verify,async (req,res)=>{
    // var {error} = registerValidation(req.body);
    // if(error) return res.status(400).send(error.details[0].message);

    //
    //
    // const salt =await bcrypt.genSalt(10);
    // const hashedPassword =await bcrypt.hash(req.body.password,salt);


    const father = new Father({
        name: req.body.name,
        key: req.body.key,
        age: req.body.age,
        relation: req.body.relation,
        photo: req.body.photo
    })
    var user = await User.findOne({_id: req.user._id})
    console.log(user)
        user.fathers.push(father)

    const user1 = user.save()
    res.status(200).send(father)



})


router.post('/login',cors(),async (req,res)=>{
    var {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    // const father = await Father.findOne({key: req.body.key})
    const user = await User.findOne({'fathers.key':req.body.key});

    // if(!user) return res.status(400).send('Key not found');
if(!user) return res.status(404).send({error: "not found"})

// res.status(200).send(user)


    const father = user.fathers.find(father=>father.key===req.body.key);
    res.status(200).send(father)

    //Create token
    //jwt.sign({information}, password pour securilte random)


    // const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
    // res.header('auth-token', token).send(token);


    // res.send("Logged in !");


})

module.exports = router;
