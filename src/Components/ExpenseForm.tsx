import {type Expense } from '../type';

function ExpenseForm(){
return (
  <div className='bg-white p-6 rounded-2xl shadow-lg mb-8 border border-purple-100'>

    <label className='block text-sm font-medium text-slate-700 mb-1'>Title</label>
    <input type='text' placeholder='Enter title' className='w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all'/>

    <label className='block text-sm font-medium text-slate-700 mb-1'>Amount</label>
    <input type='number' placeholder='Enter Amount' className='w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all'/>

    <label className='block text-sm font-medium text-slate-700 mb-1'>Category</label>
    <select className='w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all'
>
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Bills">Bills</option>
      <option value="Health">Health</option>
      <option value="Leisure">Leisure</option>
    </select>
    <button type='submit' className='w-full bg-purple-600 text-white font-bold py-2 rounded-lg hover:bg-purple-700 active:scale-95 transition-all'>Submit</button>
  </div>
)
}

export default ExpenseForm