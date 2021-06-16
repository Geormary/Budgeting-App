// Dependencies
const express = require("express");
const cors = require("cors");
// Configuration
const app = express();
// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Geormary's budgeting app!");
});
// Export app
module.exports = app;