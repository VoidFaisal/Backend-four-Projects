import { CustomAPIError } from "../error/Custom-Error.js";
const ErrorHandler = (err,req,res,next) =>
{
    if(err instanceof CustomAPIError)
        {
            return res.status(err.statusCode).json({msg:err.message})
        } 
return res.status(500).json({msg:"error handler"})

}

export default ErrorHandler;