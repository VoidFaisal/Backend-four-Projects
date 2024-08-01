import dotenv from "dotenv";
import "express-async-errors" 
import ErrorHandler from "./middleware/ErrorHandler.js";
import NotFound from "./middleware/NotFound.js";
import connectDB from "./db/ConnectDB.js";
import router from "./routes/Products.js"
dotenv.config();
import express from "express"
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get("/",(req,res)=>
{
    res.send('<h1>Store API</h1> <a href="/api/v1/products">Product Routes</a>')
})

app.use('/api/v1/products',router)


app.use(ErrorHandler)
app.use(NotFound)





const start = async () =>
    {
        try {
           await connectDB(process.env.MONGO_URI)
            app.listen(port,()=>console.log(`Server is listening on localhost:${port}...`))
        } catch (error) {
            console.log(error)
        }}
start();