import express from "express";
import { tokenValidator } from "../middlewares/token.validator.js";
import { createReport } from "../controllers/reports.controller.js";
import { upload } from "../middlewares/upload.middleware.js";
import { bodyValidator } from "../middlewares/body.validator.js";
import { reportValidationSchema } from "../validations/report.validator.js";

const router = express.Router();

router.post("/upload", tokenValidator, upload.single("file"), createReport);
// router.get("/all", tokenValidator, getReports);
// router.get("/:id", tokenValidator, getReportById);
// router.delete("/:id", tokenValidator, deleteReport);

export default router;
