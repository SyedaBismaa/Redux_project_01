  import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import {  useNavigate } from "react-router-dom"
import { useDispatch} from "react-redux"
import { asynccreateproduct } from "../../stores/actions/productAction"


const CreateProduct = () => {
     const { register, handleSubmit } = useForm()
   const navigate = useNavigate();
  const dispatch= useDispatch()
  const CreateProductHandler = (product) => {
    product.id = nanoid();
    console.log(product)
    dispatch(asynccreateproduct(product));
    navigate("/")
  };

 return(
     <form
    onSubmit={handleSubmit(CreateProductHandler)}
    className='flex flex-col w-1/2 justify-start items-start  p-5 '>

     <input
      {...register("image")}
      className='outline-0 border-b p-2 text-xl'
      type="url"
      placeholder=' Image Url' />

    <input
      {...register("title")}
      className='outline-0 border-b p-2 text-xl'
      type="text"
      placeholder='Title' />

    <input
      {...register("price")}
      className='outline-0 border-b p-2 text-xl'
      type="number"
      placeholder='$00' />

    <textarea
      {...register("description")}
      className='outline-0 border-b p-2 text-xl'
      placeholder=' Enter description'
      ></textarea>

       <input
      {...register("category")}
      className='outline-0 border-b p-2 text-xl'
      type="text"
      placeholder='category name' />

    <button className="mt-5 bg-blue-500 p-2 rounded-md">Create Product</button>

  </form>
  );
}

export default CreateProduct