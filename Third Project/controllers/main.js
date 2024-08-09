import { createCustomError, CustomAPIError } from "../error/Custom-Error.js";
import jwt from "jsonwebtoken";
const login = async (req, res) => {
  const { username, password } = req.body;
  // mongoose
  // joi
  // check in the controller
  if (!username || !password) {
    throw new CustomAPIError("Please Provide username and Password", 400);
  }
  const id = new Date().getDate();
  const token = jwt.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
    console.log(req.user);
    
    const luckNumber = Math.floor(Math.random() * 100);
    res
      .status(200)
      .json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckNumber}`,
      });
};

export { login, dashboard };
