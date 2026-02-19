import Joi from "joi";
const PasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

const signupSchema = Joi.object({
  username: Joi.string().min(3).max(50).alphanum().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .pattern(PasswordPattern)
    .message({
      "string.pattern.base":
        "Password must be included 1 special character, 1 digit, 1 capital, 1 small",
    })
    .required(),
}).required();

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).required();

export { signupSchema, loginSchema };