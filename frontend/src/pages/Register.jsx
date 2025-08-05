
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { Link } from "react-router-dom"
const Register = () => {

  const { register, reset, handleSubmit } = useForm()

  const RegisterHandler = (user) => {
    user.id = nanoid();
    console.log(user)
  }


  return <form
    onSubmit={handleSubmit(RegisterHandler)}
    className='flex flex-col w-1/2 justify-start items-start  p-5 '>

    <input
      {...register("username")}
      className='outline-0 border-b p-2 text-xl'
      type="text"
      placeholder='Username' />

    <input
      {...register("email")}
      className='outline-0 border-b p-2 text-xl'
      type="email"
      placeholder='jhon@doe.com' />

    <input
      {...register("password")}
      className='outline-0 border-b p-2 text-xl'
      type="password"
      placeholder='++++' />

    <button className="mt-5 bg-blue-500 p-2 rounded-md">Ragister User</button>

    <p className="mt-5">
      already Have an accound?
      <Link className='text-blue-500' to="/login" > Login</Link>
    </p>
  </form>

}

export default Register;