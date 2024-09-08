import React from 'react'

const Button = ({type, onClick=()=>{},children, color="default"}) => {

  const typeColor={
    default:` bg-slate-700 hover:border-slate-700 hover:text-slate-700 hover:bg-slate-200 active:bg-slate-300`,
    alert:` bg-red-700 hover:border-red-700 hover:text-red-700 hover:bg-red-200 active:bg-red-300`
  }

  return (
    <button type={type} onClick={onClick} className={` py-3 px-5 text-white border-2 border-solid border-white rounded-xl
     `+typeColor[color]} >{children}</button>
  )
}

export default Button