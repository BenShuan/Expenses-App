const express = require('express');
const app = express();
var cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())

if (process.env.NODE_ENV!=='production') {
  require('dotenv').config();
}
const url =process.env.DATABASE_URL;

mongoose.connect(process.env.DATABASE_URL,{dbName:'Expencess'})
const db  = mongoose.connection

db.on('error', (err)=> console.log('Server Failed'))
db.once('open', ()=> console.log('Server started' ))

app.use(express.json())

const expensesRouter = require('./routes/expenses');
app.use('/expenses',expensesRouter);

app.listen(process.env.Port || 3000)