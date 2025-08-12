import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../../stores/actions/userAction';

const UserProfile = () => {
  const {
    userReducer: { users },
  } = useSelector((state) => state);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    }
  })
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const UpdateUserHandler = (user) => {   
    dispatch(asyncupdateuser(users.id, user));
  };

  const logoutHandler = () => {
   dispatch(asynclogoutuser())
    navigate("/login")
  }
  
  const deleteHandler = () => {
   dispatch(asyncdeleteuser(users.id))
    navigate("/login")
  }
  
  return users ? (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {users.username}
          </h1>
          <p className="text-2xl text-gray-300">{users.email}</p>
        </div>

        {/* Profile Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">👤</div>
            <h3 className="text-xl font-semibold text-white mb-1">Profile</h3>
            <p className="text-gray-400">User Account</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">🛒</div>
            <h3 className="text-xl font-semibold text-white mb-1">Cart Items</h3>
            <p className="text-gray-400">{users.cart?.length || 0} items</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">⭐</div>
            <h3 className="text-xl font-semibold text-white mb-1">Status</h3>
            <p className="text-gray-400">{users.isAdmin ? 'Admin' : 'User'}</p>
          </div>
        </div>

        {/* Update Form */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Update Profile</h2>
          
          <form
            onSubmit={handleSubmit(UpdateUserHandler)}
            className='space-y-6'
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Username Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Username
                </label>
                <input
                  {...register("username")}
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200'
                  type="text"
                  placeholder='Enter username'
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
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200'
                  type="email"
                  placeholder='Enter email address'
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                {...register("password")}
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200'
                type="password"
                placeholder='Enter new password'
                required
              />
            </div>

            {/* Update Button */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              🔄 Update Profile
            </button>
          </form>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-6">
          <button 
            onClick={logoutHandler}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-4 px-6 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-orange-500/25"
          >
            🚪 Logout
          </button>
          
          <button 
            onClick={deleteHandler}
            className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-red-500/25"
          >
            🗑️ Delete Account
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
        <p className="text-xl text-gray-300">Loading...</p>
      </div>
    </div>
  )
}

export default UserProfile