const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");

//INDEX
transactions.get("/", (req, res) => {
  res.status(200).json(transactionsArray)
});
//SHOW
transactions.get("/:id",(req,res)=>{
  const {id} = req.params
  if(transactionsArray[id]){
    res.json(200).json(transactionsArray[id])
  } else {
    res.redirect("/404");
  }
})



module.exports = transactions;
