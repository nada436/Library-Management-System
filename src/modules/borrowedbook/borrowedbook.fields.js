import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";

import { borrowbook, overdue_books, return_book } from "./borrowedbook.resolve.js";
import * as borrow_types from "./borrowedbook.type.js";



export const borrowedbook_quary={
  overdue_books: {
        type: new GraphQLList(borrow_types.overdue_bookstype),
        resolve:overdue_books
},
}

export const borrowedbook_motation={
  borrow_book: {
        type: borrow_types.borrow_book,
        args:  {
          bookId: { type: new GraphQLNonNull(GraphQLID) }
          ,token: { type: new GraphQLNonNull(GraphQLString)
          }},
          resolve: borrowbook,
        },
        makeBookAvilable: {
          type: borrow_types.return_book,
          args:  {
            bookId: { type: new GraphQLNonNull(GraphQLID) }
            ,token: { type: new GraphQLNonNull(GraphQLString)
            }},
            resolve: return_book,
          },
        
      };
