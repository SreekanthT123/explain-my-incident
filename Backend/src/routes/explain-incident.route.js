import express from "express";
import { explainIncident } from "../services/explain-incident.service.js";

const router = express.Router();

router.post("/explain-incident", async (req, res) => {
  const { incident_description } = req.body;

  if (
    !incident_description ||
    typeof incident_description !== "string" ||
    !incident_description.trim()
  ) {
    return res.status(400).json({
      error: "incident description is required.",
    });
  }

  try {
    const result = await explainIncident(req.body);
    res.json(result);
  } catch {
    res.status(500).json({
      error: "Unable to explain incident",
    });
  }
});

export default router;
