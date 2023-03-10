import express from "express";
import { projectController } from "../controllers";

const router = express.Router();

router.post("/create-project", projectController.createProject);

router.get("/", projectController.getProjects);

router.get("/:id", projectController.getProject);

router.patch("/update-project/:id", projectController.updateProject);

router.delete("/delete-project/:id", projectController.deleteProject);

export { router as portfolioRoute };