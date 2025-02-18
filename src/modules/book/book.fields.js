import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { newbook, all_books, bookbyID } from "../book/book.resolve.js";
import * as book_types from "./book.type.js";



export const book_quary={
    allbooks: {
        type: new GraphQLList(book_types.book),
        resolve:all_books
},
get_book_byid: {
  type: book_types.book,
  args:{id:{type:GraphQLString}},
  resolve:bookbyID
}}



export const book_motation={
    addbook: {
        type: book_types.newbook,
        args:  {
          title: { type: new GraphQLNonNull(GraphQLString) },
          author: { type: new GraphQLNonNull(GraphQLID) },
          publishedYear: { type: new GraphQLNonNull(GraphQLInt) },
          genre: { type: new GraphQLNonNull(GraphQLString) },
          availableCopies: { type: new GraphQLNonNull(GraphQLInt) }
          },
          resolve: newbook,
        },
        
      };
