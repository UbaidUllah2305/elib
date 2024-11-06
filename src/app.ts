import express from "express";

const app = express();

// Routes
// Http methods: GET, POST, PUT, DELETE, PATCH
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the server",
  });
});

export default app;
