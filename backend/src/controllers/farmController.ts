import { Request, Response } from "express";

import {
  listFarms,
  getFarmById
} from "../repositories/farmRepository";
import {
  notFound,
  internalError,
  okResponse
} from "../utils/responseUtil";

export const list = (req: Request, res: Response) => {
  return listFarms()
    .then(farms => okResponse(res, farms))
    .catch(err => internalError(res, err));
};

export const getById = (req: Request, res: Response) => {
  const farmId: number = +(req.params.id);
  return getFarmById(farmId)
    .then(farm => (
      !farm
        ? notFound(res)
        : okResponse(res, farm)
    ))
    .catch(err => internalError(res, err));
};