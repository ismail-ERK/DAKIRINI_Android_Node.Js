const router = require('express').Router();
const Father = require('../models/Father');
const User = require('../models/User');
const bodyParser = require('body-parser');
const verify = require('../middlewares/verifyToken');
const {registerValidation,loginValidation} = require("../verifications/validationFather");
const cors = require("cors");

const getFathers = async (req,res)=>{
    // var {error} = registerValidation(req.body);
    // if(error) return res.status(400).send(error.details[0].message);

    //
    //
    // const salt =await bcrypt.genSalt(10);
    // const hashedPassword =await bcrypt.hash(req.body.password,salt);


    var user = await User.findOne({_id: req.user._id})


    const user1 = user.save()
    res.status(200).send(user.fathers)



}
const getOneFather = async (req,res)=>{
    var user = await User.findOne({_id: req.user._id})
    const father = user.fathers.filter(father=>father.key===req.params.key)

    console.log(req.params.key)
    res.status(200).send(father[0])


}
const updateFather = async (req,res)=>{
    const {name, age, relation, photo} = req.body
    var user = await User.findOne({_id: req.user._id})
    user.fathers = user.fathers.map(father=>{
        if(father.key === req.params.key){
            father.name=name?name:father.name;
            father.age=age?age:father.age;
            father.relation=relation?relation:father.relation;
            father.photo=photo?photo:father.photo;
            return father
        }else {
            return father
        }
    })

    const user1 = user.save()
    console.log(req.params.key)
    res.status(200).send(user.fathers)



}
const deleteFather = async (req,res)=>{
    var user = await User.findOne({_id: req.user._id})
    user.fathers = user.fathers.filter(father=>father.key !== req.params.key)

    const user1 = user.save()
    console.log(req.params.key)
    res.status(200).send(user.fathers)


}

module.exports = {getFathers,getOneFather,updateFather,deleteFather};