import React from 'react'

export const SelectInput = (props) => {
  return (

    <div className="relative  w-10/12">

      <input  list={props.id} placeholder='' className="peer h-10 w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
      focus:ring-2 focus:ring-inset focus:ring-indigo-600 rounded-md border-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" />

      <label htmlFor={props.id} className="absolute right-2 -top-5 text-gray-900 text-sm transition-all 
      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-900 peer-focus:text-md ">{props.label}</label>

      <datalist id={props.id}>
        {props.data?.map(item => <option key={item} value={item}></option>)}

      </datalist>

    </div>

  )
}
