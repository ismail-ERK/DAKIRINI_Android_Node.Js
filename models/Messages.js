const mongoose =require('mongoose')


const messageSchema =new mongoose.Schema({
    msgId:{
        type:Number,
        trime:true,
        required:true,
    },
    msgLabel:{
        type:String,
        trime:true,
        required:true,
        default:"Unlabelled message",

    },
    msgColor:{
        type:String,
        trime:true
    },
    msgContent:{
        type:String,
        trime:true,
        required:true,
        default:"Message with no content",
    },
    msgImage:{
        type:String,
        trime:true,
        required:true,
        default:"Message with no image",
    },
    msgVoice:{
        type:String,
        trime:true,
        required:true,
        default:"Message with no voice",
    },
    msgCreationDate:{
        type:Date,
        default:()=>Date.now()

    },
    is_sent:{
        type:Boolean,
        default:false
    },
    is_delivered:{
        type:Boolean,
        default:false
    },
    is_read:{
        type:Boolean,
        default:false
    },
    fatherKey:{
        type:String,
        default:"Message with no key"
    }
},{timestamps:false})


module.exports =mongoose.model('Message',messageSchema);
