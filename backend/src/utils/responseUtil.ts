import { Response } from "express";

export const okResponse = (res: Response, data: any) => {
  return res.status(200).send({
    status: "OK",
    data,
    timestamp: new Date().toISOString()
  });
};

export const notFound = (res: Response) => {
  return res.status(404).send({
    status: "NOK",
    message: "The asked resource was not found",
    timestamp: new Date().toISOString()
  });
};

export const internalError = (res: Response, err: any) => {
  return res.status(500).send({
    status: "NOK",
    message: "Internal error : Please retry later",
    stack: JSON.stringify(err), // SHOULD BE IN A LOGGER (Security matter and monitoring)
    timestamp: new Date().toISOString()
  });
};

export const unauthorizedError = (res: Response) => {
  return res.status(401).send({
    status: "NOK",
    message: "Authorization is not valid",
    timestamp: new Date().toISOString()
  });
};