import mongoose from "mongoose";
export const dbconnection=() => {
    mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "GraphQLLibrary_Management_System" 
  })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

}

