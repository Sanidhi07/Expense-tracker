import {type Expense } from '../type';

interface ExpenseCardProps{
    expense:Expense
    onDelete:(id:number)=>void
}

export const ExpenseCard=({expense,onDelete}:ExpenseCardProps)=>{
    return (
    <div className='bg-white shadow-md p-4 mb-4 rounded-xl flex justify-between items-center transition delay-75 duration-150 ease-in-out hover:-translate-y-0.5 hover:scale-100'>
        <div>
      <h3 className='text-lg font-bold text-slate-800 '>{expense.title}</h3>
            <p className='text-sm text-slate-500'>Category: <strong>{expense.category}</strong></p>
      
      </div>
      <div className='text-right'>
        <p className='font-semibold text-green-600'>Amount: ₹{expense.amount}</p>
       <small>ID: {expense.id}</small>
       <button onClick={() => onDelete(expense.id)} 
               className="text-red-500 text-xs font-bold hover:text-red-700 mt-2 ml-2">
            DELETE
        </button>
      </div>
      
        
    </div>
    )

}