import {type Expense } from '../type';

interface ExpenseCardProps{
    expense:Expense
}

export const ExpenseCard=({expense}:ExpenseCardProps)=>{
    return (
    <div className='bg-white shadow-md p-4 mb-4 rounded-xl flex justify-between items-center'>
        <div>
      <h3 className='text-lg font-bold text-slate-800 '>{expense.title}</h3>
            <p className='text-sm text-slate-500'>Category: <strong>{expense.category}</strong></p>
      
      </div>
      <div className='text-right'>
        <p className='font-semibold text-green-600'>Amount: ₹{expense.amount}</p>
       <small>ID: {expense.id}</small>
      </div>
      
        
    </div>
    )

}