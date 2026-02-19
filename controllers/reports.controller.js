import Report from "../models/report.model.js";
import { extractStructuredData, generateSummary } from "../services/ai.service.js";
import { runOCR } from "../services/ocr.service.js";
import { convertPDFToImages } from "../services/pdftoimage.service.js";
// import { generateSummary, extractStructuredData } from "../services/ai.service.js";

export const createReport = async (req, res) => {
    try {
        const userId = req.user._id;
        const { originalname, mimetype, path } = req.file;

        let extractedText = "";

        if (mimetype === "application/pdf") {
            // Convert PDF → Images
            const images = await convertPDFToImages(path);
            for (const img of images) {
                extractedText += await runOCR(img) + "\n";
            }
        } else {
            // Directly OCR images
            extractedText = await runOCR(path);
        }

        // AI Summary
        const aiSummary = await generateSummary(extractedText);

        // // Structured JSON
        const structuredData = await extractStructuredData(extractedText);

        // Save in DB
        const report = await Report.create({
            user: userId,
            originalFileName: originalname,
            fileType: mimetype,
            extractedText,
            aiSummary,
            structuredData
        });

        res.status(201).json({ message: "Report processed successfully", report });
    } catch (err) {
        console.error("ERROR:", err);
        res.status(500).json({ message: "Failed to process report", error: err.message });
    }
};

