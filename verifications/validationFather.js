//Validation
const Joi = require('@hapi/joi');



const registerValidation = (body)=>{
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        key: Joi.string().min(6).required(),
        age: Joi.required(),
        relation: Joi.string().required(),
        photo: Joi.string().max(10000000000000000000000).required(),
    })


    return schema.validate(body);
}


const loginValidation = (body)=>{
    const schema = Joi.object({

        key: Joi.string().min(6).required(),
    })


    return schema.validate(body);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
