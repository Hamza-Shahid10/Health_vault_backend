import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reportSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    originalFileName: String,
    fileType: String,
    extractedText: String,
    aiSummary: String,
    structuredData: Object,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default model("Report", reportSchema);