import { Express, Router } from "express";
import { healthCheck } from "../controllers/healthController";
import { getFarmsWithLatestSeason, getFarmById } from "../controllers/farmController";

const router = Router();

router.get("/health", healthCheck);
router.get('/farms', getFarmsWithLatestSeason);
router.get('/farms/:id', getFarmById);

export const setupRoutes = (app: Express) => {
  app.use("/api", router);
};

export default router;
