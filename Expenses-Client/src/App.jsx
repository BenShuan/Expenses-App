import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpensesForm from './components/ExpensesForm'
import ExpensesList from './components/ExpensesList'


function App() {

  const [page, setPage] = useState(0)

  const pages = [
    <ExpensesList setPage={setPage}/>,
    <ExpensesForm setPage={setPage}/>]
  return (
    <div className='w-screen h-dvh bg-main flex justify-center py-16 px-8 font-sans bg-cover bg-center bg-fixed '>
      {pages[page]}
    </div>
  )
}

export default App
