import Joi from "joi";

export const signupValidationSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        "string.empty": "Name is required"}),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phone: Joi.string().required()
     
  })
  export const loginValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(), 
  })
  export const delete_user_ValidationSchema = Joi.object({
    token: Joi.string().required(),
   
  })

