import { Router } from "express";
import {
  list,
  getById
} from "../controllers/farmController";

export const farmRoutes = (router: Router) => {
  router.get('/farms', list);
  router.get('/farms/:id', getById);
};