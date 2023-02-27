import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

const Protect =  async(req,res,next)=>{
    let token

    //check if req has a headrs token 
   if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

    try {
        // get the token from the headre

        token = req.headers.authorization.split(' ')[1];
        
        // verify token 

        const deceded = jwt.verify(token, process.env.SERCRET_KEY);

        // get user  from token

        req.user = await User.findById(deceded.id).select('-password')
        next()
    } catch (error) {
        res.status(400).json({
            message:'you are not authorized',
            error:error,
        });
    }
    }
    if(!token){
        res.status(400).json({
            message:'you are not authorized ; no token',
            
        });
    }
   
}
   

export default Protect





