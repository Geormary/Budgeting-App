// Dependencies
const express = require("express");
const cors = require("cors");
const transactionsController = require("./controllers/transactionsController")
// Configuration
const app = express();
// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Geormary's budgeting app!");
});

app.use("/transactions", transactionsController)

app.get("*", (req, res) => {
  res.status(404).send("Page not found.");
});

// Export app
module.exports = app;