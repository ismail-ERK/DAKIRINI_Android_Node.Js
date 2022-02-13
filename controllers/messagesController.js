const Message = require('../models/Messages')
const verify = require("../middlewares/verifyToken");
const cors=require("cors")
exports.create = async (req, res) => {
    console.log(req.body);
    let message = new Message(req.body);
    message.is_sent = true;
    message.msgColor = "yellow";
    message.save((err, message) => {
        if (err) {
            return res.status(400).json({err: `reminder not persisted because of this error : ${err.message}`})
        }
        res.send(message);
        })
}

exports.getData = (req, res) => {
    Message.find({fatherKey:req.params.fatherKey}, async function (err, messages) {
        await res.send(messages);
    });
}
exports.updateDelivery = async (req, res) => {
    const message = await Message.findOne({msgId: req.params.id,fatherKey:req.params.fatherKey});
    if (message != null) {
        console.log("updating started")
        message.is_delivered = true;
        message.msgColor = "green";
        message.save();
        console.log("updating finished");
    }
    res.send(message);
}
exports.getUndeliveredData = async (req, res) => {

    const messages = await Message.find({is_delivered: false,fatherKey:req.params.fatherKey});

    res.send(messages);
}
exports.updateRead = async (req, res) => {
    const message = await Message.findOne({msgId: req.params.id,fatherKey:req.params.fatherKey});
    message.is_read = true;
    message.msgColor = "blue";
    message.save();
    res.send(message);
}
