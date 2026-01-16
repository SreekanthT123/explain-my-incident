import { SYSTEM_PROMPT } from "./explain-incident.prompt.js";
import { getOpenAIClient } from "./openai.client.js";

export async function explainIncident(data) {
  const client = getOpenAIClient();
  const {
    incident_description,
    logs = "",
    errors = "",
    changes = "",
    context = "Not specified",
  } = data;

  const userPrompt = `
    Incident Description:
    ${incident_description}
    
    Logs:
    ${logs}
   
    Errors:
    ${errors}

    Recent changes:
    ${changes}

    Context:
    ${context}
    `;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userPrompt },
    ],
  });

  const content = response.choices[0].message.content;

  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error("Invalid AI response");
  }
  return {
    summary: String(parsed.summary || ""),
    likely_cause: String(parsed.likely_cause || ""),
    impact: String(parsed.impact || ""),
    next_step: String(parsed.next_step || ""),
  };
}
