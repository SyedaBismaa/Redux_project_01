import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <nav className="flex mb-10 justify-center items-center gap-x-5 p-10">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Products">Products</NavLink>
    <NavLink to="/login">Login</NavLink>


  </nav>
  
}

export default Navbar