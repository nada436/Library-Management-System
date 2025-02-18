import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";


export const newbook = new GraphQLObjectType({
    name: "bookinfo",
    fields: {
      id: { type: GraphQLID },
      title: { type: GraphQLString },
    },
  });

  export const book = new GraphQLObjectType({
    name: "allbookinfo",
    fields: {
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      author: { type: GraphQLID },
      publishedYear: { type: GraphQLInt},
      genre: { type: GraphQLString },
      availableCopies: { type: GraphQLInt },
    },
  })
  

  