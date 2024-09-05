const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const expensesScheme = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default:Date.now
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  whos: {
    type: String,
    required: true,
  },
},{ collection: 'September' });

const InsertExpenses = (data) => {
  console.log("data", data);
};

const Expenses = model("September", expensesScheme);

module.exports = { Expenses, InsertExpenses };
