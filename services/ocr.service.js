import { createWorker } from "tesseract.js";
import path from "path";

export const runOCR = async (filePath) => {
  const worker = await createWorker({
    langPath: path.resolve("./tessdata"), // Custom language folder
    logger: (m) => console.log("OCR Progress:", m),
  });

  try {
    await worker.loadLanguage("eng");
    await worker.initialize("eng");

    const { data } = await worker.recognize(filePath);
    await worker.terminate();

    return data.text;
  } catch (err) {
    console.error("OCR Error:", err);
    await worker.terminate();
    return "";
  }
};
