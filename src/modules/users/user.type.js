import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";


export const register_info = new GraphQLObjectType({
    name: "userinfo",
    fields: {
      id: { type: GraphQLID },
      email: { type: GraphQLString },
    },
  });
  

  export const token = new GraphQLObjectType({
    name:'token',
      fields:{token:{type:GraphQLString}}
  })
  export const delete_user = new GraphQLObjectType({
    name: "delete_user",
    fields: {
      message: { type: GraphQLString },
  }});