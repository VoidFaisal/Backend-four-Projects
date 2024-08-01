// import { CustomAPIError } from "../error/CustomError.js";
const ErrorHandler = (err,req,res,next) =>
{
    console.log(err)  
     // if(err instanceof CustomAPIError)
    //     {
    //         return res.status(err.statusCode).json({msg:err.message})
    //     } 
return res.status(500).json({msg:err.message})

}

export default ErrorHandler;