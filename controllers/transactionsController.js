const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");

//INDEX
transactions.get("/", (req, res) => {
  res.status(200).json(transactionsArray)
});
//SHOW
transactions.get("/:index",(req,res)=>{
  const {index} = req.params
  console.log(index)
  if(transactionsArray[index]){
    console.log(index)
    res.status(200).json(transactionsArray[index])
  } else {
    console.log(index)
    res.redirect("/404");
  }
})
// //CREATE
// transactions.post("/", (req,res)=>{
//   const {body} = req.body
//   transactionsArray.push(body)
//   res.json(transactionsArray[transactionsArray.length-1])
// })

// //DELETE
// transactions.delete("/:idx",(req,res)=>{
//   const {id} = req.params
//   const deletedTransaction = transactionsArray.splice(idx, 1);
//   if(transactionsArray[idx]){
//     res.status(200).json(deletedTransaction);
//   } else {
//     res.redirect("/404")
//   }
// })

// //UPDATE
// transactions.put("/:idx", (req, res) => {
//   const {idx} = req.params
//   transactionsArray[idx] = req.body;
//   res.status(200).json(transactionsArray[idx]);
// });



module.exports = transactions;
