import express from "express";
import { contactController } from "../controllers";

const router = express.Router();

router.post("/send-message", contactController.createContactSubmission);

router.get("/", contactController.getContactsSubmissions);

router.get("/:id", contactController.getContactSubmission);

router.put("/update-contact/:id", contactController.updateContactSubmission);

router.delete("/delete-contact/:id", contactController.deleteContactSubmission);

export { router as contactRoute };