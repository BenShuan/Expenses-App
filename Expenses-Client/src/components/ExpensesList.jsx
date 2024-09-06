import React, { useEffect, useState } from 'react'
import { GetAllExpenses } from '../Data/DataCalls'
import Expenses from './Expenses'
import Button from './Button'

const ExpensesList = ({setPage}) => {

  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    GetAllExpenses((d) => setExpenses(d), (err) => alert(err))

  }, [])


  return (
    <div className='w-fit p-8  flex flex-col items-center rounded-xl border-2 border-gray-700 backdrop-blur-lg gap-3	justify-between shadow-2xl'>
      <ul className='bg-white shadow overflow-auto rounded-md max-w-sm mx-auto min-w-64 '>

        {expenses.map((exp) => {
          return <Expenses key={exp._id} exp={exp}/>
        })}
      </ul>

      <Button type={"button"} onClick={()=>setPage(1)}>להוספה +  </Button>

    </div>
  )
}

export default ExpensesList