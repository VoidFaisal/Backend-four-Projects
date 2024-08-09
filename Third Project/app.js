import express from "express";
import "dotenv";
import "express-async-errors";
import NotFound from "./middleware/NotFound.js";
import ErrorHandler from "./middleware/ErrorHandler.js";
import mainrouter from "./routes/main.js"
const app = express();
const port = process.env.PORT || 3000;
// middlware
app.use(express.json());




app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/api/v1",mainrouter);

//middleware
app.use(NotFound);
app.use(ErrorHandler);

const start = async () => {
 try {
    app.listen(
        port,
        console.log(`app is listening on port http://localhost:${port}...`)
      );
 } catch (error) {
    console.log(error);
    
 }
};

start();