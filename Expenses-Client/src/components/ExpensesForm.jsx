import React from 'react'
import Input from './Input'
import { DateInput } from './DateInput'
import { SelectInput } from './SelectInput'
import { SendNewExpenses } from '../Data/DataCalls'

const whosList = ['בית', 'בן', 'רוני']
const typeList = ['סרטים סדרות', 'מוזיקה', 'בילויים', 'אירועים', 'פלאפון', 'מחשב', 'לוטו', 'גלישה', ' שכ"ד', 'טלפון', 'חשמל', 'גז', 'מים וביוב', 'אינטרנט וכבלים', 'ארנונה', 'תחזוקה או תיקונים', 'ועד בית', 'ציוד', 'אחר', 'תשלום רכב', 'ביטוח רכב', 'רישוי', 'דלק', 'תחזוקת רכב', 'חניה', 'דוחות / כביש 6', 'אישית', 'סטודנט', 'כרטיס אשראי', 'אחר', 'דואר', 'מדינה', 'מקומי', 'ביטוח לאומי', 'ביטוח בריאות', 'ביטוח חיים', 'קופת חולים', 'חסכון טיולים', 'חיסכון אירועים', 'חשבון להשקעה', 'אחר', 'קניות סופר', 'ארוחות מחוץ לבית', 'אקסטרות', 'מזון', 'תרופות', 'טיפוח', 'צעצועים', 'אחר', 'מתנות', 'צדקה 1', 'צדקה 2', 'צדקה 3', 'תרופות', 'שיער/ציפורניים', 'בגדים', 'מוצרים / ריהוט לבית', 'אימונים', 'אחר - כלליות', 'טיסות', 'ביטוחים', 'מזומן', 'אחר', 'מקדמות', 'תשלומים', 'מתנות', 'אחר']


const ExpensesForm = () => {

  const handleSubmit = (e) => {

    e.preventDefault();

    const newExp = {
      name: e.currentTarget.name.value,
      date: e.currentTarget.date.value,
      amount: e.currentTarget.amount.value,
      type: e.currentTarget.type.value,
      whos: e.currentTarget.whos.value,
    }

    console.log('newExp', newExp)

    SendNewExpenses(newExp) ;
    
    e.currentTarget.reset()

  }

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col items-center rounded-xl border-2 border-gray-700 backdrop-blur-lg	justify-evenly shadow-2xl'>
      <Input label={"הוצאה"} type={'text'} id={"name"} />
      <Input label={"date"} type={'date'} id={"date"} />
      <Input label={"סכום"} type={'number'} id={"amount"} />
      <SelectInput label={"סוג הוצאה"} type={'text'} id={"type"} data={typeList} />
      <SelectInput label={"של מי"} id={"whos"} data={whosList} />

      <button type='submit' className=' py-3 px-5 bg-slate-700 text-white border-2 border-solid border-white rounded-xl
      hover:border-slate-700 hover:text-slate-700 hover:bg-slate-200 active:bg-slate-300' >הוסף</button>
    </form>
  )
}

export default ExpensesForm