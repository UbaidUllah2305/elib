import { Request, Response } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";

// Global error handler
const globalErrorHandler = (err: HttpError, req: Request, res: Response) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message,
    errorStack: config.env === "development" ? err.stack : "",
  });
};

export default globalErrorHandler;
