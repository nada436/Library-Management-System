import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { all_libraries, new_library } from "./library.resolve.js";
import { LibraryType } from "./library.type.js";


export const library_quary={
    all_libraries: {
        type: new GraphQLList(LibraryType),
        resolve:all_libraries
},
}

export const library_motation={
    new_library: {
        type: GraphQLString,
        args:  {
          name: { type: new GraphQLNonNull(GraphQLString) },
          location: { type: new GraphQLNonNull(GraphQLString) },
          books: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
         
          },
          resolve: new_library,
        },
        
      };
