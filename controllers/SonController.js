const SonService = require("../services/SonService.js");

const allSons = async (req, res) => {
  const response = await SonService.allSons(req, res);
  if (response?.errMsgs) return res.status(500).json(response);
  else return res.status(200).json(response);
};

module.exports = {
  allSons
};