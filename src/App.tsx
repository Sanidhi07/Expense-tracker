
import { ExpenseCard } from './components/ExpenseCard'
import type { Expense } from './type'

function App() {
  
  const expenses:Expense[]=[
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
  ]

  return (
  /* Added w-full to ensure it takes up the whole width */
  <div className='min-h-screen w-full bg-slate-900 p-10 flex flex-col items-center'>
    
    <div className='w-full max-w-md '> 
      
      <h1 className='text-4xl font-black text-purple-300 mb-10 text-center tracking-tight'>
        My Expenses
      </h1>

      <div className="space-y-4 bg-purple-300 rounded-xl">
        {expenses.map((item) => (
          <ExpenseCard key={item.id} expense={item}/>
        ))}
      </div>

    </div>
  </div>
)
  
}

export default App
