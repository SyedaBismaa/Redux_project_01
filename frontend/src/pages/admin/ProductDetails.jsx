import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

import { useForm } from "react-hook-form"
import { asyncdeleteproduct, asyncupdateproduct } from '../../stores/actions/productAction';




const ProductDetails = () => {
  const { id } = useParams();
  const {
    productsReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);

  const product = products?.find((product) => product.id == id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category,
    }
  })
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const UpdateProductHandler = (product) => {
    dispatch(asyncupdateproduct(id, product));

  };


  const deleteHandler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate("/")
  }

  return product ? (
    <>
      <div className='w-full flex'>
        <img className='w-1/2 h-1/2 object-cover' src={product.image} alt="" />
        <div className='w-1/2 h-1/2 '>
          <h1>{product.title}</h1>
          <h2>{product.price}</h2>
          <p>{product.description}</p>
          <p>{product.category}</p>

          <button>Add To cart</button>

        </div>
      </div>
      <hr />
       {users&&users?.isAdmin && 
       <div>
        <form
          onSubmit={handleSubmit(UpdateProductHandler)}
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

          <button className="mt-5 bg-blue-500 p-2 rounded-md">Update Product</button>

          <button type="button"
            onClick={deleteHandler}
            className="mt-5 bg-red-500 p-2 rounded-md">DeleteProduct
          </button>
        </form>


      </div>
       }
      
    </>
  ) : "Loading...."
}

export default ProductDetails