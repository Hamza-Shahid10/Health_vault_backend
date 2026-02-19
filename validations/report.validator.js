import Joi from "joi";
import mongoose from "mongoose";

export const reportValidationSchema = Joi.object({
    user: Joi.string()
        .required()
        .custom((value, helpers) => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                return helpers.error("any.invalid");
            }
            return value;
        }),

    originalFileName: Joi.string().trim(),

    fileType: Joi.string().valid("pdf", "png", "jpg", "jpeg"),

    extractedText: Joi.string().allow(""),

    aiSummary: Joi.string().allow(""),

    structuredData: Joi.object()
}).options({ abortEarly: false });
