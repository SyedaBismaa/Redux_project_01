import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Navbar = () => {

  const user = useSelector((state) => state.userReducer.users);

  return (
    <nav className="flex mb-10 justify-center items-center gap-x-5 p-10">

      <NavLink to="/">Home</NavLink>
      <NavLink to="/Products">Products</NavLink>
      {user ? (
        <>
          <NavLink to="/admin/create-product">Create Products</NavLink>
        </>
      ) : (

        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )
      }

    </nav>
  );

}

export default Navbar