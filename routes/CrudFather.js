const router = require('express').Router();
const Father = require('../models/Father');
const User = require('../models/User');
const bodyParser = require('body-parser');
const verify = require('../middlewares/verifyToken');
const {registerValidation,loginValidation} = require("../verifications/validationFather");
const cors = require("cors");
const {getFathers, deleteFather, updateFather, getOneFather} = require("../controllers/FaherController");





router.get('/',cors(),verify,async (req,res)=>{
    await getFathers(req,res);
})

router.delete('/:key',cors(),verify,async (req,res)=>{
    await deleteFather(req,res);



})
router.put('/:key',cors(),verify,async (req,res)=>{
await updateFather(req,res)
})
router.get('/:key',cors(),verify,async (req,res)=>{

 await getOneFather(req,res);

})

module.exports = router;
