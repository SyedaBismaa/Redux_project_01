
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { asyncloginuser } from "../stores/actions/userAction"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

  const { register,  handleSubmit } = useForm()
   const dispatch=useDispatch();
   const navigate = useNavigate();
  
  const LoginHandler = (user) => {
    dispatch(asyncloginuser(user));
    navigate("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-400">Sign in to your account to continue</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(LoginHandler)}
          className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl'
        >
          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                {...register("email")}
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
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
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                type="password"
                placeholder='Enter your password'
                required
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
            >
              Sign In
            </button>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link 
                className='text-blue-400 hover:text-blue-300 font-medium hover:underline transition-colors duration-200' 
                to="/register"
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login