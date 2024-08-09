import { CustomAPIError } from "../error/Custom-Error.js"
import jwt from "jsonwebtoken";
const AuthenticationMiddleware =(req,res,next) =>
{
    const authHeader = req.headers.authorization;
    console.log(authHeader);
  
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new CustomAPIError("No Token provided", 401);
    }
    const token = authHeader.split(" ")[1];
    console.log(token);
  
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      const {id,username} = decode;
      console.log({id});
      
      req.user = {id,username};
      next()
    } catch (error) {
      throw new CustomAPIError("Not Authorized To access Data", 401);
    }
}

export default AuthenticationMiddleware 