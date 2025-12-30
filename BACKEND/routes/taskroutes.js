import express from "express";
import { getAllTask,addNewTask,deleteTask,updateATask,getOneTask } from "../controller/taskController.js";

const router = express.Router();

router.get('/',getAllTask)
router.post('/',addNewTask)
router.delete('/:id',deleteTask)
router.patch('/id',updateATask)
router.get('/:id',getOneTask)

export default router;