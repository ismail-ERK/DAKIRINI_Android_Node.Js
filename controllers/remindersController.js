const Reminder =require( '../models/reminder')
const _ =require('lodash')
const verify = require("../middlewares/verifyToken");
const cors=require("cors")


/*exports.create =(req,res)=>{

     
     let reminder=new Reminder(req.body) 
  


      reminder.save((err,reminder)=>{
  
            if(err){return res.status(400).json({err:"reminder not persist"}) }
            console.log(reminder)
            res.send(
                  reminder)
})
    }*/
    exports.create = async (req, res) => {
      console.log(req.body);
      let reminder = new Reminder(req.body);
 
      reminder.save((err, reminder) => {
          if (err) {
                console.log("error")
              return res.status(400).json({err: `reminder not persisted because of this error : ${err.reminder}`})
          }
          res.send(reminder);
          })
  },
exports.getAll =(req,res)=>{
      Reminder.find({fatherKey :req.params.fatherKey})
     .exec((err,reminder)=>{
            if(err){return res.status(400).json({err:"reminder not persist"}) }
            console.log(reminder) 
          //  const result = reminder.filter(item => item.fatherKey ===req.params.fatherKey);
            console.log("reminder") ;
            res.send(reminder)
      }) 
}

exports.updatereminder = (req ,res)=>{
      Reminder.findById({_id :req.params.id})
     .exec((err,reminder)=>{
      reminder =_.extend(reminder,req.body)
      if(err){return res.status(400).json({err:"reminder not updated"}) }
      reminder.save((err,reminder)=>{
            if(err){return res.status(400).json({err:"reminder not updated"}) }
            console.log(reminder)
            res.send(
                  reminder
            )
          })
})   
}
exports.removereminder =(req,res)=>{
      Reminder.findById({_id :req.params.id}).remove((err ,reminder)=>{
        if(err){
          res.status(404).json(
              {
                  error :"reminder not found"
              }
          )
      }
      res.status(204).json({
      })
      })
    }