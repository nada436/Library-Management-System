


import { book_model } from "../../database/models/Books.model.js";
import { borrowedBook_model } from "../../database/models/BorrowedBook.model.js";
import { validateGraphQL } from "../../utils/validation.js";
import { borrow_bookValidationSchema } from "./borrowedbook.validation.js";
import { authantcation } from './../../utils/authantication.js';
import { now } from "mongoose";
export const user=(parent, args) => {
    
        return 'world';
      
}
//borrow book
export const borrowbook=async (parent, args) => {
await validateGraphQL(borrow_bookValidationSchema,args)
const user=await authantcation(args.token)
const book=await book_model.findOne({_id:args.bookId})
if(!book ||book.availableCopies==0){
  throw new Error("book is out of stock")
}
book.availableCopies -= 1; 
await book.save()
const borrowed_book=await borrowedBook_model.create({userId:user.id,bookId:args.bookId,borrowedAt:now(),returned:false,dueDate:Date.now() + 2 * 24 * 60 * 60 * 1000})    //allow borrow for only 2days

return{bookId:borrowed_book._id,title:book.title,availableCopies:book.availableCopies}
}


//Return a book (Mark a book as available again)
export const return_book=async (parent, args) => {
  await validateGraphQL(borrow_bookValidationSchema,args)
  const user=await authantcation(args.token)
  const borrowedBook = await borrowedBook_model.findOneAndUpdate(
    { _id: args.bookId, userId: user.id, returned: false },
    { returned: true },
    { new: true }
  );
  if (!borrowedBook) {
    throw new Error("Invalid book or book already returned");
  }
  const book = await book_model.findOne({ _id: borrowedBook.bookId }); 
  if (!book) {
    throw new Error("Book not found");
  }
  book.availableCopies += 1;
  await book.save();
  return { message: "Book is now available for borrowing" };
};

//Retrieve overdue borrowed books that have not been returned
export const overdue_books=async (parent, args) => {
  const overdue_books = await borrowedBook_model.find({
    returned: false, 
    dueDate: { $lt: new Date() } 
  });
    
  if (overdue_books.length==0) {
    throw new Error("no overdue books");
  }
  return overdue_books;
};
