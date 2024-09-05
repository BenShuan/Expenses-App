import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpensesForm from './components/ExpensesForm'

function App() {

  return (
    <div className='w-screen h-dvh bg-main flex justify-center py-16 px-8 font-sans '>
      <ExpensesForm /> 
    </div>
  )
}

export default App
