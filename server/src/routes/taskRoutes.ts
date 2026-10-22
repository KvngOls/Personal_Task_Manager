//  taskRoutes.ts - CONNECTS ENDPOINTS TO CONTROLLER FUNCTIONS
// All paths starts with /api/tasks (see app.ts)
// This follows RESTAPI

import { Router } from "express";
import {
  createTask,
  deleteTask,
  getALLTasks,
  getTaskById,
  updateTask,
} from "../controllers/taskController";
import { validateId } from "../middleware/validated";

const router = Router();

router.post("/", createTask);
router.get("/allTasks", getALLTasks);

// validateId run first; the controler only runs if the id is valid
router.patch("/:id", validateId, updateTask);

router.delete("/:id", validateId, deleteTask);

router.get("/:id", validateId, getTaskById);

export default router;
