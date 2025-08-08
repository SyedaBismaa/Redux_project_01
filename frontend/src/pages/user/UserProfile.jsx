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
      username: users?.image,
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
    <div>
      <h1 className='px-8 font-thin text-8xl text-gray-800'>{users.username}</h1>
      <h1 className='px-8 font-thin text-xl text-gray-300'>{users.email}</h1>

      <hr className='my-10' />
            <form
          onSubmit={handleSubmit(UpdateUserHandler)}
          className='flex flex-col w-1/2 justify-start items-start  p-5 '>

          <input
            {...register("username")}
            className='outline-0 border-b p-2 text-xl'
            type="text"
            placeholder='username' />

          <input
            {...register("email")}
            className='outline-0 border-b p-2 text-xl'
            type="email"
            placeholder='Email' />


          <input
            {...register("password")}
            className='outline-0 border-b p-2 text-xl'
            type="password"
            placeholder='password' />

          <button className="mt-5 bg-blue-500 p-2 rounded-md">Update User</button>
             <button type="button"
            onClick={logoutHandler}
            className="mt-5 bg-red-500 p-2 rounded-md">Logout User
          </button>
          <button type="button"
            onClick={deleteHandler}
            className="mt-5 bg-red-600 p-2 rounded-md">Delete User
          </button>
        </form>
    </div>
  ):"Loading..."
}

export default UserProfile