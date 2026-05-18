import { useState } from "react";
import { supabase } from "../supabase";

export default function LoginForm() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if(isNewUser){
      const {error}=await supabase.auth.signUp({
        email: email,
        password: password
      });

      if(error){
        alert(error.message);
      }else {
        alert("Account created! You can now sign in.");
        setIsNewUser(false);
      }
    }else{
      const {error}=await supabase.auth.signInWithPassword({
        email: email,
        password:password,
      });
      if(error){
        alert(error.message)
      }
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md p-8 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl">
      {/* Dynamic Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-black text-purple-300 tracking-tight">
          {isNewUser ? "Join Us" : "Welcome Back"}
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          {isNewUser 
            ? "Start tracking your expenses today" 
            : "Sign in to manage your budget"
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-widest text-purple-400/70">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500 text-sm text-white placeholder:text-slate-600 transition-all"
            placeholder="name@example.com"
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-widest text-purple-400/70">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500 text-sm text-white placeholder:text-slate-600 transition-all"
            placeholder="••••••••"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-500/20 active:scale-95"
        >
          {loading ? (
    <div className="flex items-center justify-center gap-2">
      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      <span>Processing...</span>
    </div>
  ) : (
    isNewUser ? "Create Account" : "Sign In"
  )}
        </button>
      </form>

      {/* Toggle Button */}
      <div className="mt-8 text-center text-sm text-slate-400">
        {isNewUser ? "Already a member? " : "New here? "}
        <button
          type="button"
          onClick={() => setIsNewUser(!isNewUser)}
          className="text-purple-300 font-bold hover:text-purple-200 transition-colors"
        >
          {isNewUser ? "Log In" : "Create one"}
        </button>
      </div>
    </div>
  );
}