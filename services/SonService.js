const contactModel = require("../models/Contact.js");

const allSons = async (req, res) => {
  console.log("all sons");
  var response = {
    errMsgs: {},
    data: {},
  };
  console.log("All Sons")
  let fatherKey = req.params.fatherKey;
  console.log(fatherKey);
  // parentId = req.body.parentId;
  // const contacts = await contactModel.findById(mongoose.Types.ObjectId(parentId));
  const sons = await contactModel.find({'fatherKey': fatherKey});
  response = sons;
  // console.log(response);
  return response;
};

module.exports = {allSons};