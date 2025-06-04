import express from "express";
import cors from "cors";
import { setupRoutes } from "./routes/index";

const app = express();

// Enable CORS for frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3010',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

setupRoutes(app);

export default app;
