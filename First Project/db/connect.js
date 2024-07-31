import mongoose from "mongoose"
// const connectionString = "mongodb+srv://faisalmuhammad2001:wRxfZfVn84zxpv3v@expressnodeproject.gwwydvz.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=ExpressNodeProject" 


const connectDB = (url) =>
{
    mongoose.connect(url)

}
export default connectDB;