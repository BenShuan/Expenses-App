import React, { useEffect, useState } from 'react'
import { GetAllExpenses } from '../Data/DataCalls'
import { motion } from "framer-motion"
import Expenses from './Expenses'
import Button from './Button'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const ExpensesList = () => {

  const expenses = useLoaderData();

  const navigate = useNavigate();

  console.log('first', expenses)

  return (
    <div className='p-8 h-full flex flex-col items-center gap-3 justify-between'>
      <AnimatePresence>

        <ul className='shadow overflow-auto rounded-md max-w-sm mx-auto min-w-64 '>
          {expenses?.map((exp, i) => {
            return <motion.div
            initial={{x:'-100%'}}
            animate={{
              x:'0%',
              
            }}
            transition={{
              delay:i/8
            }}
            
            >
              <Expenses key={exp._id} exp={exp} index={i} />
            </motion.div>
          })}

        </ul>
      </AnimatePresence>
      <p className='text-xl font-extrabold '>{`סה"כ: ${expenses.reduce((acc, item) => acc + item.amount, 0).toLocaleString()} ₪`}</p>

      <Button type={"button"} onClick={() => navigate("add")} >להוספה +  </Button>

    </div>
  )
}

export default ExpensesList