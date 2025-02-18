import Joi from "joi";

export const new_libraryValidationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.empty": "name is required"
  }),
  location: Joi.string().required().messages({
    "string.empty": "location is required"
  }),
  books: Joi.array()
    .items(
      Joi.string().required()
    )
    .required()
    .messages({
      "array.base": "books must be an array",
      "any.required": "books field is required"
    })
});
 

