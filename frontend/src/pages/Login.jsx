
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
    <div className="min-h-screen flex items-center justify-center  bg-gray-100 p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold  mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-900">Sign in to your account to continue</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(LoginHandler)}
          className='bg-white/5 backdrop-blur-sm border border-black/40 rounded-2xl p-8 shadow-2xl'
        >
          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium  mb-2">
                Email Address
              </label>
              <input
                {...register("email")}
                className='w-full px-4 py-3 bg-white/10 border border-black/60 rounded-lg  placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                type="email"
                placeholder='Enter your email'
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                {...register("password")}
                className='w-full px-4 py-3 bg-white/10 border border-black/60 rounded-lg placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
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
              Login
            </button>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-900">
              Don't have an account?{' '}
              <Link 
                className='text-blue-700 hover:text-blue-600 font-medium hover:underline transition-colors duration-200' 
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