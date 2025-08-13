import {  useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Navbar = () => {

  const user = useSelector((state) => state.userReducer.users);

  return (
    <nav className=" pt-5  mb-10 rounded-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-3xl font-medium ">
              ShoeTopia
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-lg font-medium transition-all duration-200 ${
                    isActive 
                      ? ' shadow-lg' 
                      : ' hover:bg-white/10'
                  }`
                }
              >
                Home
              </NavLink>
              
              {user ? (
                <>
                  {user && user?.isAdmin && (
                    <NavLink 
                      to="/admin/create-product"
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-lg font-medium transition-all duration-200 ${
                          isActive 
                            ? 'bg-green-600  shadow-lg' 
                            : ' hover:bg-white/10'
                        }`
                      }
                    >
                      Create Products
                    </NavLink>
                  )}
                  
                  <NavLink 
                    to="/admin/user-profile"
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-lg font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-purple-600 shadow-lg' 
                          : '  hover:bg-white/10'
                      }`
                    }
                  >
                    Profile
                  </NavLink>
                  
                  <NavLink 
                    to="/cart"
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-lg font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-orange-600  shadow-lg' 
                          : '  hover:bg-white/10'
                      }`
                    }
                  >
                    🛒 Cart
                  </NavLink>
                </>
              ) : (
                <NavLink 
                  to="/login"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive 
                        ? 'bg-blue-600  shadow-lg' 
                        : ' hover:bg-blue/20'
                    }`
                  }
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar