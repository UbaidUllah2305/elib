import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

// Routes     // Http methods: GET, POST, PUT, DELETE, PATCH
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the server",
  });
});

// Global error handler
app.use(globalErrorHandler);

export default app;
