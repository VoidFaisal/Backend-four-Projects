import express from "express";
const app = express()
import tasks from "./routes/task.js"
import connectDB from "./db/connect.js";
import ErrorHandler from "./Middleware/ErrorHandler.js"
import NotFound from "./Middleware/NotFound.js"
import dotenv from "dotenv"; 
const port = process.env.PORT || 3000;
dotenv.config()
// middleware


app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/tasks',tasks);


// middleware
app.use(NotFound)
app.use(ErrorHandler)

const start =async () =>
{
  try {
    await connectDB(process.env.ConnectionString);
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`)
    })  
  } catch (error) {
    console.log("error:", error)
  }
  
}
start()
