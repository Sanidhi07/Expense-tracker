import {type Expense } from '../type';

interface ExpenseCardProps{
    expense:Expense
}

export const ExpenseCard=({expense}:ExpenseCardProps)=>{
    return 
    <div className='expense-card'>
      <h3>{expense.title}</h3>
      <p>Amount: ₹{expense.amount}</p>
      <p>Category: <strong>{expense.category}</strong></p>
      <small>ID: {expense.id}</small>
        
    </div>

}