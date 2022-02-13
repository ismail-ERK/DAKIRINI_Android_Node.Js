const express = require('express')
const router=express.Router();
const cors=require("cors");
const {create, getData,getUndeliveredData, updateDelivery,updateRead, gettexttpseech}=require('../controllers/messagesController')
const verify=require("../middlewares/verifyToken")

router.post('/post',cors(),verify, create)
router.get('/get/:fatherKey',cors(),verify, getData)
router.put('/delivered/:id/:fatherKey',cors(),updateDelivery)
router.put('/read/:id/:fatherKey',cors(),verify, updateRead)
router.get('/get/undelivered/:fatherKey',cors(),getUndeliveredData)

module.exports=router;