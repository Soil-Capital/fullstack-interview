import { Express, Request, Response, Router } from "express";
import { healthCheck } from "../controllers/healthController";

import { farmRoutes } from "./farmRoutes";

const router = Router();

router.get("/health", healthCheck);

// Add farm routes
farmRoutes(router);

// Fake route for user
router.get("/users", (req: Request, res: Response) => {
  return res.status(200).json([{
    id: 1,
    name: "hktsme",
    email: "hkts.yves@gmail.com",
    partner_id: 2,
    token: "InsiaWQiOjEsIm5hbWUiOiJoa3RzbWUiLCJlbWFpbCI6ImhrdHMueXZlc0BnbWFpbC5jb20iLCJwYXJ0bmVyX2lkIjoyfSIg"
  }]);
});

export const setupRoutes = (app: Express) => {
  app.use("/api", router);
};

export default router;
