const express = require("express");
const expenses = require("../models/expenses");
const router = express.Router();

router.post("/:collection", async (req, res) => {
  try {

    let exp = new expenses(req.body,req.params.collection)

    let newExp = await exp.InsertExpenses(req.body)

    res.status(201).json(newExp);


  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:collection", async (req, res) => {
  try {
    const exp = new expenses(req.body,req.params.collection);

    const list =await exp.GetExpenses();

    res.json(list);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.get("/:collection/:id", async (req, res) => {
  try {
    const exp = new expenses({_id:req.params.id },req.params.collection);
    const currExp =await exp.GetOneExpenses();

    res.json(currExp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:collection/:id", async (req, res) => {
  try {
    const exp = new expenses(req.body,req.params.collection);

    const list =await exp.UpdateExpenses();

    res.json(list);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:collection/:id", async (req, res) => {
  try {
    const exp = new expenses(req.body,req.params.collection);

    const list =await exp.DeleteExpenses();

    res.json(list);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
