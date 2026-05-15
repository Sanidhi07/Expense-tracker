import {useState} from 'react';

export default function LoginForm(){
  const [isNewUser,setIsNewUser]=useState(false)

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")

  const handleSubmit=(e: React.FormEvent)=>{
    e.preventDefault();

    if(isNewUser){
      console.log("Registering a BRAND NEW user with:",{email,password});
      console.log("Logging in an EXISTING user with:",{email,password});
    }
  }

  return(
    <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">{isNewUser ? "Create an Account" : "Welcome Back"}</h2>
        <p className="text-sm text-gray-500 mt-1">{isNewUser ? "Enter your details to start tracking your expenses" : "Please enter your details to sign in"}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email*/}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email Address</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='name@example.com' className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 text-sm text-gray-900" required/>
        </div>

        {/*Password*/}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Password</label>
          <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='........' className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 text-sm text-gray-900" required/>
        </div>

        {/*Dynamic Submit Button*/}
        <button type='submit' className='w-full mt-2 py-2.5 px-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-colors text-sm shadow-sm'>{isNewUser ? "Sign Up" : "Sign In"}</button>
       
      </form>

      {/*Toggle Button to switch views */}
      <div className='mt-6 text-center text-sm text-gray-500'>
        {isNewUser ? "Already have an account" : "New to the tracker?"}
        <button type="button" onClick={()=> setIsNewUser(!isNewUser)} className='text-gray-950 font-medium underline underline-offset-4 hover:text-gray-700 transition-colors'>
          {isNewUser ? "Log In" : "Create One"}
        </button>
      </div>

    </div>
  )
}