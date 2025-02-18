import Joi from "joi";

export const borrow_bookValidationSchema = Joi.object({
      bookId: Joi.string().required(),
      token: Joi.string().required()
  })
 
