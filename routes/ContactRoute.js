const express = require("express");
const {
  addContact,
  deleteContact,
  updateContact,
  allContacts,
} = require("../controllers/ContactController.js");
const cors=require("cors");
const verify=require("../middlewares/verifyToken")

const router = express.Router();
router.post("/addcontact",cors(),verify, addContact);
router.post("/deletecontact/:fatherKey",cors(),verify, deleteContact);
router.post("/updatecontact/:fatherKey",cors(),verify, updateContact);
router.get("/allcontacts/:fatherKey",cors(),verify, allContacts);

module.exports = router;
