import { motion } from 'framer-motion'
import React from 'react'

const Input = (props) => {

  return (
    <motion.div 
    initial={{
      rotateY:'100deg',
      opacity:'0'
    }}
    
    animate={{
      rotateY:'0',
      opacity:1
    
    }}
    transition={{
      duration:1
    }}
    className="relative w-10/12"
    >

    <div >

      <input {...props} placeholder='' className="p-4 peer h-10 w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
      focus:ring-2 focus:ring-inset focus:ring-indigo-600 rounded-md border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" />

      <label htmlFor={props.name} className="absolute right-2 -top-5 text-gray-900 text-sm transition-all 
      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-900 peer-focus:text-md ">{props.label}</label>
    </div>
      </motion.div>
  )
}

export default Input