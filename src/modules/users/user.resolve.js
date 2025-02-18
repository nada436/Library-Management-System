import bcrypt from "bcryptjs";
import CryptoJS from "crypto-js";
import { user_model } from "../../database/models/user.model.js";
import jwt from 'jsonwebtoken';
import { delete_user_ValidationSchema, loginValidationSchema, signupValidationSchema } from "./user.validation.js";
import { validateGraphQL } from "../../utils/validation.js";
import { authantcation } from "../../utils/authantication.js";


//sign up
export const signup=async (parent, args) => {
await validateGraphQL(signupValidationSchema,args)
const existingUser = await user_model.findOne({ email: args.email });
 if (existingUser) {
   throw new Error("User already exists");}
   
args.password = await bcrypt.hash(args.password,+(process.env.rounds)); 
args.phone = CryptoJS.AES.encrypt(args.phone, process.env.ENCRYPTION_KEY).toString()
const newuser=await user_model.create({...args})
return {
    id: newuser._id, 
    email: newuser.email
  };
}


//log in
export const login=async (parent, args) => {
  await validateGraphQL(loginValidationSchema,args)
  const existingUser = await user_model.findOne({ email: args.email});
   if (!existingUser) {
     throw new Error("invalid email ");}
   const isMatch = bcrypt.compareSync(args.password, existingUser.password);
   if(!isMatch){
    throw new Error("wrong password");}
  const token=jwt.sign({ id: existingUser._id, name: existingUser.name }, process.env.SECRET_KEY);
  return {token}

  }

  export const delete_user=async (parent, args) => {
    await validateGraphQL(delete_user_ValidationSchema,args)
    const user=await authantcation(args.token)
    const existingUser = await user_model.findOneAndDelete({_id: user.id});
     if (!existingUser) {
       throw new Error("invalid user ");}
    return {message:"user deletsd successfully"}
  
    }