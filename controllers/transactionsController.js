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
    res.status(200).json(transactionsArray[id])
  } else {
    res.redirect("/404");
  }
})
//CREATE
transactions.post("/", (req,res)=>{
  const {body} = req.body
  transactionsArray.push(body)
  res.json(transactionsArray[transactionsArray.length-1])
})

//DELETE
transactions.delete("/:id",(req,res)=>{
  const {id} = req.params
  const deletedTransaction = transactionsArray.splice(id, 1);
  if(transactionsArray[id]){
    res.status(200).json(deletedTransaction);
  } else {
    res.redirect("/404")
  }
})



module.exports = transactions;
