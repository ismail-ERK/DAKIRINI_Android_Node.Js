const router = require('express').Router();
const Father = require('../models/Father');
const User = require('../models/User');
const bodyParser = require('body-parser');
const verify = require('./verifyToken');





router.post('/register',verify,async (req,res)=>{

    //
    //
    // const salt =await bcrypt.genSalt(10);
    // const hashedPassword =await bcrypt.hash(req.body.password,salt);


    const father = new Father({
        name: req.body.name,
        key: req.body.key,
        age: req.body.age,
        relation: req.body.relation
    })
    var user = await User.findOne({_id: req.user._id})
        user.fathers.push(father)

    const user1 = user.save()
    res.send(user1)



})


router.post('/login',verify,async (req,res)=>{

    // const father = await Father.findOne({key: req.body.key})
    const user = await User.findOne({'fathers.key':req.body.key});

    // if(!user) return res.status(400).send('Key not found');


res.send(user)
    //Create token
    //jwt.sign({information}, password pour securilte random)


    // const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
    // res.header('auth-token', token).send(token);


    // res.send("Logged in !");


})

module.exports = router;
