import jwt from 'jsonwebtoken'
import { user_model } from '../database/models/user.model.js';

export const authantcation=async(token) => {
   
    if(!token){
         throw(new Error("correct token requard"));
    } 
        const tokendata=jwt.verify(token,process.env.SECRET_KEY)   
        const user=await user_model.findOne({_id:tokendata.id})
        if(!user){
             throw(new Error("something happen wrong  itis not valid token"));
        }
        return user
        
        
}


