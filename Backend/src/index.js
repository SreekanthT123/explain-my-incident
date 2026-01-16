import dotenv from"dotenv";
import express from "express";
import cors from "cors";
import explainIncidentRoutes from "./routes/explain-incident.route.js"

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json({limit:"20kb"}));

app.use("/api",explainIncidentRoutes);

app.get("/health",(_,res)=>{
    res.json({status:"ok"});
});
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});