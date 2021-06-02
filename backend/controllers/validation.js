const Joi = require('@hapi/joi');

const registerUserValidation = (data) =>{
    const registerSchema = Joi.object({
        name: Joi.string().required().min(6).max(255),
        phoneNumber: Joi.string().required().min(10).max(13),
        dateOfBirth: Joi.string().required().min(6).max(10),
        pinCode: Joi.string().required().min(4).max(4),
        address: Joi.string().required().min(6).max(255),
        gender: Joi.string().required().min(6).max(10),
        nrcPassport: Joi.string().required().min(6).max(12),
    });

    return registerSchema.validate(data);
}

module.exports.registerUserValidation = registerUserValidation;