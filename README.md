# ExplainMyIncident

**ExplainMyIncident** helps developers quickly understand what happened during a software incident and identify the most likely cause and next step.

It is designed for **clarity under pressure**, not for deep diagnosis or postmortems.

---

## 🚩 Problem

During incidents:
- Logs are noisy
- Errors are scattered
- Recent changes are unclear
- People speculate and panic
- Slack fills with partial theories

The real question engineers need answered is:

> “What happened, and what should we look at first?”

ExplainMyIncident exists to answer that — calmly and honestly.

---

## ✅ What ExplainMyIncident Does

- Accepts a free-form **incident description**
- Optionally accepts:
  - Logs
  - Errors
  - Recent changes
  - High-level context
- Produces a structured, neutral explanation:
  - What happened
  - Most likely cause (single, conservative)
  - Impact
  - First thing to investigate
- Admits uncertainty when information is insufficient
- Avoids speculation, blame, or alarmist language

---

## ❌ What ExplainMyIncident Does NOT Do

This is intentional.

ExplainMyIncident does **not**:
- Perform root cause analysis (RCA)
- Assign blame
- Generate fixes or code
- List multiple possible causes
- Parse logs or stack traces
- Replace postmortems
- Guarantee correctness

It reduces chaos — it does not conclude investigations.

---

## 🧠 How It Works

1. Developer describes the incident
2. Optional supporting information is added
3. Input is sent to a backend API
4. An AI model summarizes the incident using strict rules
5. The frontend renders a calm, structured explanation

The AI output is constrained to a fixed JSON schema.

---

## 🧩 Output Format

ExplainMyIncident always returns:

- **summary** – What happened during the incident
- **likely_cause** – The most likely cause based on available information
- **impact** – Who or what was affected
- **next_step** – The first thing to investigate

All values are strings. Empty strings are valid when information is unclear.

---

## 🧭 Context Options

Context helps bias interpretation but does not enforce assumptions.

Available contexts:
- Backend
- Frontend
- Infrastructure
- CI / Build
- Other / Not sure

Default: **Backend**

---

## 🛠️ Tech Stack

### Frontend
- Angular (standalone components)
- Tailwind CSS
- Single-page layout

### Backend
- Node.js
- Express
- OpenAI API
- Environment-based configuration

---

## 🚀 Local Setup

### Backend

- cd Backend
- npm install
- npm run dev

### Frontend
- cd Frontend/explain-my-incident-ui
- npm install
- ng serve


---

## Testing

### ExplainMyIncident is tested manually against realistic scenarios:

- Clear incidents with logs and errors
- Vague or partial descriptions
- Large, noisy inputs
- Garbage input
- Backend unavailable
- Rapid retries
### Expected behavior:
- No crashes
- Calm error handling
- Honest uncertainty
- Predictable output structure
Automated tests are out of scope for MVP.

---

## Success Criteria

ExplainMyIncident is successful if:
- Engineers understand incidents faster
- Panic and speculation are reduced
- Output feels calm and trustworthy
- Developers know where to investigate first
- The tool is helpful even with incomplete information
Success is clarity, not certainty.

---

## Philosophy

- ExplainMyIncident helps teams think clearly when it matters most.

- Clarity beats confidence.
- Honesty beats cleverness.
---

### 📄 License

- This project is intended for learning, experimentation, and portfolio use.
