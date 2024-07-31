import express from "express";
import {getAllTasks,deleteTasks,editTasks,singleTasks,createTasks} from "../Controllers/task.js"
const router = express.Router();

router.route("/").get(getAllTasks).post(createTasks)
router.route("/:id").get(singleTasks).patch(editTasks).delete(deleteTasks)

export default router;