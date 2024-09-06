const express = require("express");
const expenses = require("../models/expenses");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const expens = new expenses.Expenses({
      name: req.body.name,
      date: req.body.date,
      amount: req.body.amount,
      type: req.body.type,
      whos: req.body.whos,
    });

    const newExp = await expens.save();
    res.status(201).json(newExp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const stam = await expenses.Expenses.find();
    res.json(stam);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
