import express from "express";
import { bodyValidator } from "../middlewares/body.validator.js";
import { loginSchema, signupSchema } from "../validations/user.validators.js";
import { login, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", bodyValidator(signupSchema), signup);
router.post("/login", bodyValidator(loginSchema), login);

export default router;
