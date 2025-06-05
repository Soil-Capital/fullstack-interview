import express from "express";
import cors from "cors";
import { setupRoutes } from "./routes/index";

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

setupRoutes(app);

export default app;
