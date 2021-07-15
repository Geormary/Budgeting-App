const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");
const {ValidationError} = require("../helper.js");
//MIDDLEWARE
const validateTransaction = (req, res, next) => {
  try {
    const { date, category, amount } = req.body;
    let isTransactionValid = true;
    let errorMsg = "Transaction request not formatted correctly: ";
    
    if (typeof date !== "number") {
      isTransactionValid = false;
      errorMsg += "The 'date' field must be of type 'string'";
    }
    if (typeof category !== "string") {
      isTransactionValid = false;
      errorMsg += "The 'category' field must be of type 'string'";
    }
    if (typeof amount !== "number") {
      isTransactionValid = false;
      errorMsg += "The 'amount' field must be of type 'string'";
    }
    if (isTransactionValid !== true) {
      throw new ValidationError(errorMsg);
    }
 
  } catch (e) {
    next(e)
    
  }
  return next();
};

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
// transactions.post("/", validateTransaction, (req, res) => {
//   const { body } = req.body;
//   transactionsArray.push(body);
//   res.json(transactionsArray[transactionsArray.length - 1]);
// });

// transactions.post("/", validateTransaction, (req, res, next) => {
//   try {
//     const {body} = req.body;
//     transactionsArray.push(body)
//     res.json(transactionsArray[transactionsArray.length-1])
//     }catch (e) {
//     return next(e);
//   }
// });
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
