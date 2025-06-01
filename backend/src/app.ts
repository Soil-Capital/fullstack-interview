import express from "express";
import { setupRoutes } from "./routes/index";

const app = express();

app.use(express.json());

setupRoutes(app);

export default app;
