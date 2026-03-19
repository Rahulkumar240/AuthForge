import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back 👋
        </h1>

        <form className="flex flex-col gap-5">
          
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-white/80 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="px-4 py-2 rounded-lg bg-white/80 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-white/80 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className="px-4 py-2 rounded-lg bg-white/80 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-white text-indigo-600 font-semibold py-2 rounded-lg hover:bg-indigo-100 transition duration-200"
          >
            Login
          </button>

          <p className="text-center text-sm text-white/80 mt-2">
            Don’t have an account? <span className="font-semibold underline cursor-pointer">Register</span>
          </p>

        </form>

      </div>

    </div>
  )
}

export default Home