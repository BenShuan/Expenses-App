import React from 'react'
import Input from './Input'
import { DateInput } from './DateInput'
import { SelectInput } from './SelectInput'
import { DeleteExpenses, SendNewExpenses, UpdateExpenses } from '../Data/DataCalls'
import Button from './Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"


const whosList = ['בית', 'בן', 'רוני']
const typeList = ['סרטים סדרות', 'מוזיקה', 'בילויים', 'אירועים', 'פלאפון', 'מחשב', 'לוטו', 'גלישה', ' שכ"ד', 'טלפון', 'חשמל', 'גז', 'מים וביוב', 'אינטרנט וכבלים', 'ארנונה', 'תחזוקה או תיקונים', 'ועד בית', 'ציוד', 'אחר', 'תשלום רכב', 'ביטוח רכב', 'רישוי', 'דלק', 'תחזוקת רכב', 'חניה', 'דוחות / כביש 6', 'אישית', 'סטודנט', 'כרטיס אשראי', 'אחר', 'דואר', 'מדינה', 'מקומי', 'ביטוח לאומי', 'ביטוח בריאות', 'ביטוח חיים', 'קופת חולים', 'חסכון טיולים', 'חיסכון אירועים', 'חשבון להשקעה', 'אחר', 'קניות סופר', 'ארוחות מחוץ לבית', 'אקסטרות', 'מזון', 'תרופות', 'טיפוח', 'צעצועים', 'אחר', 'מתנות', 'צדקה 1', 'צדקה 2', 'צדקה 3', 'תרופות', 'שיער/ציפורניים', 'בגדים', 'מוצרים / ריהוט לבית', 'אימונים', 'אחר - כלליות', 'טיסות', 'ביטוחים', 'מזומן', 'אחר', 'מקדמות', 'תשלומים', 'מתנות', 'אחר']


const ExpensesForm = () => {

  const { state } = useLocation()

  const navigate = useNavigate();

  const date = state?.date === undefined ? new Date() : new Date(state?.date)

  const url = date.toLocaleString("en-GB", { month: "long" }) 


  const handleSubmit = (e) => {

    e.preventDefault();

    const newExp = {
      _id: state?._id,
      name: e.currentTarget.name.value,
      date: e.currentTarget.date.value,
      amount: e.currentTarget.amount.value,
      type: e.currentTarget.type.value,
      whos: e.currentTarget.whos.value,
    }

    console.log('newExp', newExp)


    if (state) {
      UpdateExpenses(url+ "/" + newExp._id, newExp, (d) => navigate("/"), (err) => console.log('err', err))

    } else {
      SendNewExpenses(url, newExp, (d) => navigate("/"), () => e.currentTarget.reset())
    }


  }

  const deleteExp =()=>{
    DeleteExpenses(url+ "/" + state._id,state,()=>navigate("/"),(err)=>console.log('err', err))
  }

  return (
    <form onSubmit={handleSubmit} className='w-full h-full flex flex-col items-center  justify-evenly '>
      <Link to={'/'} className='w-10/12 text-right' >{"< חזור"}</Link>

      <Input label={"הוצאה"} type={'text'} id={"name"} defaultValue={state?.name} />
      <Input label={"date"} type={'date'} id={"date"} defaultValue={date.toISOString().substring(0, 10)} />
      <Input label={"סכום"} type={'number'} id={"amount"} defaultValue={state?.amount} />
      <SelectInput label={"סוג הוצאה"} type={'text'} id={"type"} data={typeList} defaultValue={state?.type} />
      <SelectInput label={"של מי"} id={"whos"} data={whosList} defaultValue={state?.whos} />

      <div className='flex gap-4'>
        <Button type={"submit"} >{state?._id === undefined? "הוסף": "עדכן"}</Button>
        {state?._id !== undefined&&<Button type={"button"} color={"alert"} onClick={deleteExp} >מחק</Button>}
      </div>
      
    </form>
  )
}

export default ExpensesForm