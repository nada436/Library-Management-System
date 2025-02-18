import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";


export const borrow_book = new GraphQLObjectType({
    name: "borrow_bookinfo",
    fields: {
      bookId: { type: GraphQLID },
      title: { type: new GraphQLNonNull(GraphQLString)
    },availableCopies: { type: new GraphQLNonNull(GraphQLInt)}
  }});
  export const return_book = new GraphQLObjectType({
    name: "return_book",
    fields: {
      message: { type: GraphQLString },
  }});
  
  export const overdue_bookstype = new GraphQLObjectType({
    name: "overdue_books",
    fields: {
      userId: { type: GraphQLString },
      bookId: { type: GraphQLString },
      dueDate: { type: GraphQLString },
  }});
  

  