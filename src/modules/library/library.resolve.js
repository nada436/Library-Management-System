
import { book_model } from './../../database/models/Books.model.js';
import { validateGraphQL } from "../../utils/validation.js";
import { new_libraryValidationSchema } from "./library.validation.js";
import { library_model } from './../../database/models/Library.model..js';


//new library
export const new_library=async (parent, args) => {
await validateGraphQL(new_libraryValidationSchema,args)
const is_exist=await library_model.findOne({name:args.name,location:args.location})
if(is_exist){
  throw new Error("this library is exist ")
}
const new_book=await library_model.create(args)
return "library ia added"
}

//get all libraries
export const all_libraries=async (parent, args) => {
  const libraries=await library_model.find().populate({path:"books",select:"title author"})
  if(libraries.length==0){
    throw new Error("No valid books available")
  }
  console.log(JSON.stringify(libraries, null, 2));

  return libraries
  }

