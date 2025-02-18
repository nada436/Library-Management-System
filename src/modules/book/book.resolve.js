
import { user_model } from "../../database/models/user.model.js";
import { newbookValidationSchema, searchValidationSchema } from "./book.validation.js";
import { book_model } from './../../database/models/Books.model.js';
import { validateGraphQL } from "../../utils/validation.js";

//new book
export const newbook=async (parent, args) => {
await validateGraphQL(newbookValidationSchema,args)
const is_exist=await book_model.findOne({title:args.title})
if(is_exist){
  throw new Error("this book's title is exist title must be uniqe")
}
const new_book=await book_model.create({...args})
return{id:new_book._id,title:new_book.title}
}

//get all books
export const all_books=async (parent, args) => {
  const books=await book_model.find()
  if(books.length==0){
    throw new Error("No valid books available")
  }
  
  return books
  }
//get book by id
export const bookbyID=async (parent, args) => {
  await validateGraphQL(searchValidationSchema,args)
  const book=await book_model.findById(args.id)
  if(!book){
    throw new Error("invalid book")
  }
  
  return book
  }
