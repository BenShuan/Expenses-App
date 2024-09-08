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
    default: Date.now,
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
});

// const Expenses = model(month, expensesScheme, month);

class Expenses {
  constructor(exp,collection) {
    this.name = exp.name
      this.date = exp.date || new Date()
      this.amount = exp.amount
      this.type = exp.type
      this.whos = exp.whos
      this._id = exp._id 

    this.Model = model(collection, expensesScheme, collection)
  }

  InsertExpenses = async () => {
    const expens = new this.Model({
      name: this.name,
      date: this.date,
      amount: this.amount,
      type: this.type,
      whos: this.whos,
    });

    const newExp = await expens.save();

    return newExp;
  };

  GetExpenses = async () => {
    let date = new Date();

    const newExp = await this.Model.find();

    return newExp;
  };
  
  GetOneExpenses = async () => {
    let date = new Date();

    const newExp = await this.Model.find({_id:this._id});

    return newExp;
  };

  UpdateExpenses = async () => {
    const res = await this.Model.updateOne(
      { _id: this._id },
      {
        name: this.name,
        date: this.date,
        amount: this.amount,
        type: this.type,
        whos: this.whos,
      }
    );

    return res;
  };
  
  DeleteExpenses = async () => {
    const res = await this.Model.deleteOne(
      { _id: this._id }
    );

    return res;
  };
}


module.exports = Expenses;
