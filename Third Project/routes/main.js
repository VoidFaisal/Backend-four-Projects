import express from "express"
import { login,dashboard } from "../controllers/main.js";

const router = express.Router();

import AuthenticationMiddleware from "../middleware/Auth.js";

router.route("/login").post(login)
router.route("/dashboard").get(AuthenticationMiddleware,dashboard)

export default router