import cors from "cors"
import { dbconnection } from "./database/databaseconnection.js"
import { createHandler } from 'graphql-http/lib/use/express'
import { graphql_schema } from "./modules/graphql_schema.js"
import  expressPlayground from'graphql-playground-middleware-express'

export const bootstrap=(app,express) => {
    app.use(cors())
    app.use(express.json())

    //data base connection
    dbconnection()
    //main route
    app.get('/', (req, res) => res.send('Hello World!'))
    

      //graphql route
      app.use('/graphql', createHandler({
        schema: graphql_schema, 
      }));

      //document
      app.get('/playground', expressPlayground.default({ endpoint: '/graphql' }))
      
}


