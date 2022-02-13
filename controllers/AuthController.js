const router = require('express').Router();
const User = require('../models/User');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../verifications/validation');
const cors = require('cors')
const Father = require("../models/Father");


const registerSon = async (req,res)=>{
console.log('register')

    const salt =await bcrypt.genSalt(10);
    const hashedPassword =await bcrypt.hash(req.body.password,salt);


    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        image: req.body.image
    })

    try{
        const saveUser = await user.save();
        res.send(saveUser);
    }catch (err){
        res.status(400).send(err)
    }
}


const loginSon= async (req,res) => {
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
    res.header('auth-token', token).send(user);


    // res.send("Logged in !");


}

const registerFaher = async (req,res)=>{
    // var {error} = registerValidation(req.body);
    // if(error) return res.status(400).send(error.details[0].message);

    //
    //
    // const salt =await bcrypt.genSalt(10);
    // const hashedPassword =await bcrypt.hash(req.body.password,salt);

    console.log(req.req.body)
    const father = new Father({
        name: req.req.body.name,
        key: req.req.body.key,
        age: req.req.body.age,
        relation: req.req.body.relation,
        photo: req.req.body.photo
    })
    var user = await User.findOne({_id: req.req.user._id})
    console.log(user)
    user.fathers.push(father)

    const user1 = user.save()
    res.status(200).send(father)


}

const loginFather = async (req,res) => {

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

}

module.exports = {registerSon,loginSon, registerFaher, loginFather}