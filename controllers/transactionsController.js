const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");

//MIDDLEWARE

//INDEX
transactions.get("/", (req, res) => {
  res.status(200).json(transactionsArray);
});
//SHOW
transactions.get("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) {
    res.status(200).json(transactionsArray[index]);
  } else {
    res.redirect("/404");
  }
});
// //CREATE
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

// //DELETE
transactions.delete("/:indexArray", (req, res) => {
  const deletedTransaction = transactionsArray.splice(req.params.indexArray, 1);
  res.status(200).json(deletedTransaction);
});

module.exports = transactions;
