
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch} from "react-redux"
import {asyncregisteruser} from "../stores/actions/userAction"

const Register = () => {

  const { register, reset, handleSubmit } = useForm()
   const navigate= useNavigate();
  const dispatch= useDispatch()
  
  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin= false;
    user.cart=[];
    dispatch(asyncregisteruser(user));
    navigate("/login")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
            Create Account
          </h1>
          <p className="text-gray-400">Join us and start shopping today</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(RegisterHandler)}
          className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl'
        >
          <div className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                {...register("username")}
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200'
                type="text"
                placeholder='Enter your username'
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                {...register("email")}
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200'
                type="email"
                placeholder='Enter your email'
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                {...register("password")}
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200'
                type="password"
                placeholder='Create a password'
                required
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
            >
              Create Account
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link 
                className='text-green-400 hover:text-green-300 font-medium hover:underline transition-colors duration-200' 
                to="/login"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Register;