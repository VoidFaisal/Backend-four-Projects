import dotenv from "dotenv"
dotenv.config()
import connectDB from "./db/ConnectDB.js"
import Product from "./model/Product.js"
import jsonProducts from "./products.json" assert { type: "json" };

const start =async () =>
{
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log("success!!!")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
start()