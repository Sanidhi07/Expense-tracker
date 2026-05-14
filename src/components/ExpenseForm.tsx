import React, { useState } from 'react';
import {type Expense } from '../type';

interface ExpenseFormProps{
  onAdd:(expense:Expense)=>void
}

function ExpenseForm({onAdd}:ExpenseFormProps){
const [form, setForm] = useState<{
  title: string;
  amount: number | '';
  category: string;
}>({
  title: '',
  amount: '', 
  category: 'Food'
});
  type ChangeEvent=React.ChangeEvent<HTMLInputElement|HTMLSelectElement>

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
    onAdd({
      ...form,
      id: Date.now(), // Generate a unique ID
    } as Expense);
    setForm({ title: '', amount: '', category: 'Food' });
  }

  const handleChange=(e: ChangeEvent)=>{
    const {name,value}=e.target

    setForm({
      ...form,
      [name]:name === 'amount' ? Number(value) : value
    })
}
return (

  <div className='bg-white p-6 rounded-2xl shadow-lg mb-8 border border-purple-100'>
     <form onSubmit={handleSubmit}>
    <label className='block text-sm font-medium text-slate-700 mb-1'>Title</label>
    <input type='text' placeholder='Enter title' name='title' value={form.title} onChange={handleChange} className='w-full px-4 py-2 rounded-lg border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all'/>

    <label className='block text-sm font-medium text-slate-700 mb-1'>Amount</label>
    <input type='number' placeholder='Enter Amount' name='amount' value={form.amount} onChange={handleChange} className='w-full px-4 py-2 rounded-lg border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all'/>

    <label className='block text-sm font-medium text-slate-700 mb-1'>Category</label>
    <select name='category' value={form.category} onChange={handleChange} className='w-full px-4 py-2 rounded-lg border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all'
>
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Bills">Bills</option>
      <option value="Health">Health</option>
      <option value="Leisure">Leisure</option>
    </select>

    <button type='submit'  className='w-full bg-purple-600 text-white font-bold py-2 rounded-lg hover:bg-purple-700 active:scale-95 transition-all mt-3'>Submit</button>
   </form>
  </div>
)
}

export default ExpenseForm