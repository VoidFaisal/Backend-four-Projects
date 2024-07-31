import express from "express";
const app = express()
import tasks from "./routes/task.js"
import connectDB from "./db/connect.js";

const port = 3000;

// middleware


app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/tasks',tasks);
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
