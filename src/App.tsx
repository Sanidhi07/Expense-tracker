import { useState } from 'react'
import { ExpenseCard } from './components/ExpenseCard'
import ExpenseForm from './components/ExpenseForm'
import type { Expense } from './type'

function App() {
  
  const [expenses,setExpenses]=useState<Expense[]>([
    {
      id:1,
      title:"Cheese",
      amount:100,
      category:"Food"
    },
    {
      id:2,
      title:"light bill",
      amount:1500,
      category:"Bills"
    },
    {
     id:3,
     title:"Hong-Kong",
     amount:30000,
     category:"Travel"
    }
  ])
 function deleteExpense(id:number){
  const newExpense=expenses.filter((item)=>(item.id)!== id)
  setExpenses(newExpense)

 }

 function addExpense(newExpense:Expense){
  setExpenses([newExpense,...expenses])

 }

 const totalAmount=expenses.reduce((sum,item)=> sum + item.amount,0)
  return (
  /* Added w-full to ensure it takes up the whole width */
  <div className='min-h-screen w-full bg-slate-900 p-10 flex flex-col items-center'>
    
    <div className='w-full max-w-md '> 
      
      <h1 className='text-4xl font-black text-purple-300 mb-10 text-center tracking-tight'>
        My Expenses
      </h1>
      <ExpenseForm onAdd={addExpense}></ExpenseForm>

      <div className="space-y-4 bg-purple-300 rounded-xl">
        {expenses.map((item) => (
          <ExpenseCard key={item.id} expense={item} onDelete={deleteExpense}/>
        ))}
      </div>
      {expenses.length === 0 && <p className="text-slate-400">No expenses yet. Add one above!</p>}

      <div className='mt-8 p-4 bg-purple-600/30 rounded-xl border border-purple-500/50 text-center'>
        <p className='text-purple-200 text-sm uppercase tracking-widest font-bold'>Total Amount</p>
        <p className='text-3xl font-black text-white mt-1'>{totalAmount}</p>
      </div>

    </div>
  </div>
)
  
}

export default App
