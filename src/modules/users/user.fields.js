import {  GraphQLNonNull, GraphQLString } from "graphql";
import { delete_user, login, signup } from "./user.resolve.js";
import * as types from "./user.type.js";




export const user_motation={
    signup: {
        type: types.register_info,
        args:  {
            name: { type: new GraphQLNonNull(GraphQLString) },
            email: { type: new GraphQLNonNull(GraphQLString) },
            password: { type: new GraphQLNonNull(GraphQLString) },
            phone: { type: new GraphQLNonNull(GraphQLString) },
          },
          resolve: signup,
        },
        login: {
          type: types.token,
          args:  {
              email: { type: new GraphQLNonNull(GraphQLString) },
              password: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: login,
          },
          deleteuser: {
            type: types.delete_user,
            args:  {
               token: { type: new GraphQLNonNull(GraphQLString) },
              },
              resolve:delete_user,
            },
      };
