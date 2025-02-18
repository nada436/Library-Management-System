import {
    GraphQLSchema,
    GraphQLObjectType,
  } from 'graphql';
import { user_motation } from './users/user.fields.js';
import { book_motation, book_quary } from './book/book.fields.js';
import { borrowedbook_motation, borrowedbook_quary } from './borrowedbook/borrowedbook.fields.js';
import { library_motation, library_quary } from './library/library.fields.js';

export const graphql_schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
      ...book_quary,
      ...library_quary,
      ...borrowedbook_quary,
        }
    }),
    mutation:new GraphQLObjectType({
        name: "Mutation",
        fields: {
          ...user_motation,
          ...book_motation,
          ...borrowedbook_motation,
          ...library_motation
        },
      })
  });
