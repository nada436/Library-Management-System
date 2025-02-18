import Joi from "joi";

export const newbookValidationSchema = Joi.object({
  title: Joi.string().min(3).max(30).required().messages({
        "string.empty": "title is required"}),
  author: Joi.string().required(),
  publishedYear: Joi.number().required(),
  genre: Joi.string().required()
  ,availableCopies: Joi.number().required(),
     
  })
  export const searchValidationSchema = Joi.object({
    id: Joi.string().required(), 
    })
 
