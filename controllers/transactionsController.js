const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");

transactions.get("/", (req, res) => {
  res.status(200).json(transactionsArray)
});

module.exports = transactions;
