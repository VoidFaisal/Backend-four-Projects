import mongoose from "mongoose";

const connectDB = (url) =>
{
    return mongoose.connect(url)
    //  console.log("DB connected successfully");
}

export default connectDB;