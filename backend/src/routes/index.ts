import { Express, Router } from "express";
import { healthCheck } from "../controllers/healthController";

const router = Router();

router.get("/health", healthCheck);

export const setupRoutes = (app: Express) => {
  app.use("/api", router);
};

export default router;
