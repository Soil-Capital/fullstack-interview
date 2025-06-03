import { Express, Router } from "express";
import { healthCheck } from "../controllers/healthController";

import { farmRoutes } from "./farmRoutes";

const router = Router();

router.get("/health", healthCheck);

// Add farm routes
farmRoutes(router);

export const setupRoutes = (app: Express) => {
  app.use("/api", router);
};

export default router;
