import React from 'react'

const Button = ({type, onClick=()=>{},children}) => {
  return (
    <button type={type} onClick={onClick} className=' py-3 px-5 bg-slate-700 text-white border-2 border-solid border-white rounded-xl
      hover:border-slate-700 hover:text-slate-700 hover:bg-slate-200 active:bg-slate-300' >{children}</button>
  )
}

export default Button