
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
transactions.post("/", (req,res)=>{
  transactionsArray.push(req.body)
  res.json(transactionsArray[transactionsArray.length - 1]);
})

// //DELETE
transactions.delete("/:index",(req,res)=>{
  const {index} = req.params
  const deletedTransaction = transactionsArray.splice(index, 1);
  if(transactionsArray[index]){
    res.status(200).json(deletedTransaction);
  } else {
    res.redirect("/404")
  }
})


// //UPDATE
// transactions.put("/:idx", (req, res) => {
//   const {idx} = req.params
//   transactionsArray[idx] = req.body;
//   res.status(200).json(transactionsArray[idx]);
// });

module.exports = transactions;
