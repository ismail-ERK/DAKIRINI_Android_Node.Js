const express = require("express");
const {
  allSons,
} = require("../controllers/SonController.js");
const cors=require("cors");
const verify=require("../middlewares/verifyToken")

const router = express.Router();
router.get("/allsons/:fatherKey",cors() , allSons);

module.exports = router;
