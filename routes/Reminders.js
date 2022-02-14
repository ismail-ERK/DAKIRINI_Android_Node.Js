const express = require('express')
const Reminder =require( '../models/reminder')
const cors=require("cors");

const router=express.Router();
const verify=require("../middlewares/verifyToken")

const {create,update, getAll, updatereminder, removereminder}=require('../controllers/remindersController')

router.post('/',cors(),verify, create)

router.get('/all/:fatherKey',cors(),getAll)
router.put('/:id',cors(),updatereminder)
router.delete('/:id',cors(),removereminder)
  module.exports=router;