import { useEffect, useState } from 'react'
import { supabase } from './supabase'
import { ExpenseCard } from './components/ExpenseCard'
import ExpenseForm from './components/ExpenseForm'
import type { Expense } from './type'
import {motion, AnimatePresence} from "framer-motion"

function App() {
  
  const [expenses,setExpenses]=useState<Expense[]>([])
  const [loading,setLoading]=useState(true)

  //FETCH DATA (READ)
  useEffect(()=>{
    const fetchExpenses=async ()=>{
      const {data,error}=await supabase
      .from('expenses')
      .select('*')
      .order('created_at',{ascending:false});
      
      if(error) console.error('Error fetching:',error);
      else setExpenses(data||[]);
      setLoading(false);
    };
    fetchExpenses();
  },[]);

//ADD DATA
async function addExpense(newExpense:Expense){
  const{data,error}=await supabase
  .from('expenses')
  .insert([{
    title: newExpense.title,
    amount: newExpense.amount,
    category: newExpense.category
  }]).select();
  if(error)console.error("Error adding",error);
  else if(data)setExpenses([data[0],...expenses]);
}
//DELETE DATA
 async function deleteExpense(id:number){
  const {error}=await supabase
  .from('expenses')
  .delete()
  .eq('id',id);

  if(error)console.error("Error deleting",error);
  else setExpenses(expenses.filter((item)=>(item.id)!== id))

 }
 if (loading) {
  return (
    <div className='min-h-screen w-full bg-slate-900 flex items-center justify-center'>
      <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500'></div>
    </div>
  )
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

      <div className="space-y-4 bg-purple-300 rounded-xl p-4">
        <AnimatePresence>
         
        {expenses.map((item,index) => (
          <motion.div
          key={item.id}
          initial={{opacity:0 , x: -20}}
          animate={{opacity:1, x: 0}}
          exit={{opacity: 0, scale:0.8}}
          transition={{duration: 0.4, delay: index * 0.1, ease:"easeOut"}}
          whileHover={{scale: 1.02}}
          whileTap={{scale: 0.98}}>
          
          <ExpenseCard expense={item} onDelete={deleteExpense}/>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
      {expenses.length === 0 && <p className="text-slate-400">No expenses yet. Add one above!</p>}

      <div className='mt-8 p-4 bg-purple-600/30 rounded-xl border border-purple-500/50 text-center'>
        <p className='text-purple-200 text-sm uppercase tracking-widest font-bold'>Total Amount</p>
        <p className='text-3xl font-black text-white mt-1'>{totalAmount.toLocaleString('en-IN')}</p>
      </div>

    </div>
  </div>
)
  
}

export default App
