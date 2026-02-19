import openai from "../config/openai.js";

export const generateSummary = async (ocrText) => {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful medical assistant." },
            { role: "user", content: `Summarize this medical report clearly:\n\n${ocrText}` }
        ]
    });

    return response.choices[0].message.content;
};

export const extractStructuredData = async (ocrText) => {
    const prompt = `
Extract key medical values from this report and return ONLY valid JSON.
Example:
{
  "hemoglobin": "13.5 g/dL",
  "wbc": "7000 cells/mcL",
  "platelets": "150000 cumm"
}

Report:
${ocrText}
`;

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You extract structured medical data as JSON." },
            { role: "user", content: prompt }
        ]
    });

    try {
        return JSON.parse(response.choices[0].message.content);
    } catch (err) {
        console.error("LLM JSON parse error:", err);
        return {};
    }
};
