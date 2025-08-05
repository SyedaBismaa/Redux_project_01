
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { asyncloginuser } from "../stores/actions/userAction"
import { Link } from "react-router-dom"
const Login = () => {

  const { register, reset, handleSubmit } = useForm()
   const dispatch=useDispatch();
  const LoginHandler = (user) => {
    dispatch(asyncloginuser(user));
  }


  return <form
    onSubmit={handleSubmit(LoginHandler)}
    className='flex flex-col w-1/2 justify-start items-start  p-5 '>

    <input
      {...register("email")}
      className='outline-0 border-b p-2 text-xl'
      type="email"
      placeholder='email' />

    <input
      {...register("password")}
      className='outline-0 border-b p-2 text-xl'
      type="password"
      placeholder='++++' />

    <button className="mt-5 bg-blue-500 p-2 rounded-md" > Login User</button>

    <p className="mt-5">
      Don0t Have an accound?
      <Link className='text-blue-500' to="/register" >Register</Link>
    </p>
  </form>

}

export default Login