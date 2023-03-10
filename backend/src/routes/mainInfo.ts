import express from "express";
import { mainInfoController } from "../controllers";

const router = express.Router();

router.get("/", mainInfoController.getMainInfo);

router.post("/", mainInfoController.createMainInfo);

router.patch("/:id", mainInfoController.updateMainInfo);

export { router as mainInfoRoute };