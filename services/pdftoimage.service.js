import PDFImage  from "pdf-poppler";
import path from "path";
import fs from "fs";

export const convertPDFToImages = async (pdfPath) => {
  const outputDir = path.dirname(pdfPath);
  const outputPrefix = path.basename(pdfPath, path.extname(pdfPath));

  const opts = {
    format: 'png',
    out_dir: outputDir,
    out_prefix: outputPrefix,
    page: null // all pages
  };

  try {
    await PDFImage.convert(pdfPath, opts);

    // Get generated PNG files
    const files = fs.readdirSync(outputDir)
      .filter(f => f.startsWith(outputPrefix) && f.endsWith(".png"))
      .map(f => path.join(outputDir, f));

    return files; // array of image paths
  } catch (err) {
    console.error("PDF → Image conversion failed:", err);
    return [];
  }
};
