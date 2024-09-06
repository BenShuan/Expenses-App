import React from 'react'

const Expenses = ({exp}) => {
  return (
    <li>
      <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{exp.name}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">{exp.type} </p>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">סכו"ם: <span class="text-green-600">{exp.amount}</span></p>
                <span className="font-medium text-indigo-600 hover:text-indigo-500">{exp.whos}</span>
            </div>
        </div>
    </li>
  )
}

export default Expenses