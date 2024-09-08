
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Expenses = ({ exp, index }) => {

  const [load, setLoad] = useState(false);

  let date = new Date(exp.date).toLocaleDateString('en-GB');

  setTimeout(() => {
    setLoad(true)
  }, (index+1) * 100);

  return (
    <Link to={"./add"} state={exp} className='w-full'>

    <li className={`bg-white translate-x-${load ? 0 : 'full'} duration-[1500ms] transition-all `}  >
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{exp.name}</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 text-nowrap">{exp.type} </p>
        </div>
        <p className="mt-2 text-sm font-medium text-gray-500">{date}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">סכו"ם: <span className="text-green-600">{exp.amount.toLocaleString()} ₪</span></p>
          <span className="font-medium text-indigo-600 hover:text-indigo-500">{exp.whos}</span>
        </div>
      </div>
    </li>
    </Link>
  )
}

export default Expenses