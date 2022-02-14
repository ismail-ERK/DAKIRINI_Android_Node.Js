const mongoose =require('mongoose')


const ReminderSchema =new mongoose.Schema({
    Reminder_title:{
        type:String,
        maxlength:20,
        trime:true,
        required:true,

    },
    Reminder_content:{
        type:String,
        trime:true,
        required:true,

    },
    Reminder_day_name:{
        type:String,
        default:()=>{var date = new Date();
             return  date.toLocaleString('en-US', {
                  weekday: 'long',
                })} 
    },
    Reminder_time:{
        type:Date,
        default:Date.now

        },        
        hour:{
            type:Number ,
            default:1
        },     
        minute:{
            type:Number ,
            default:1
        },     
    isRepeat:{
        type:Boolean,
        default:false
    },
    Reminder_days:{
        type :Array,
        default:[]
    },
     mon:{
        type:Boolean,
        default:false
    },
    tue:{  
        type:Boolean,
        default:false
    }
    ,wed:{   
        type:Boolean,
        default:false
    },
    thu:{
        type:Boolean,
        default:false
    },
    fri:{
        type:Boolean,
        default:false
    },
    sat:{type:Boolean,
        default:false
    },
    sun:{
        type:Boolean,
        default:false
    },
    Reminder_voice:{
        type:String,        
    },
    photo:{
        type:String,
        },
    is_active:{
            type:Boolean,
            default:true
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
        required:true,
        default:"message with no key"
    }
},{timestamps:true})


module.exports =mongoose.model('Reminder',ReminderSchema);
