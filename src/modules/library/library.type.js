import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";


const BookType = new GraphQLObjectType({
  name: "Book",
  fields: {
    title: { type: GraphQLString },
    author: { type: GraphQLString },
  },
});


export const LibraryType = new GraphQLObjectType({
  name: "Library",
  fields: {
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    books: { type: new GraphQLList(BookType) }, 
  },
});
  

  