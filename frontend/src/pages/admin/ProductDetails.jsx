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
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Product Details
          </h1>
        </div>

        {/* Product Display */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <img 
              className="w-full h-96 object-cover rounded-xl" 
              src={product.image} 
              alt={product.title} 
            />
          </div>

          {/* Product Info */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-white mb-4">{product.title}</h1>
            <div className="text-4xl font-bold text-blue-400 mb-4">₹{product.price}</div>
            <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
            <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              {product.category}
            </div>
            
            {/* Add to Cart Button */}
            <button className="w-full mt-6 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-green-500/25">
              🛒 Add To Cart
            </button>
          </div>
        </div>

        {/* Admin Controls */}
        {users && users?.isAdmin && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Admin Controls</h2>
            
            <form
              onSubmit={handleSubmit(UpdateProductHandler)}
              className='space-y-6'
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image URL Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Product Image URL
                  </label>
                  <input
                    {...register("image")}
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                    type="url"
                    placeholder='https://example.com/image.jpg'
                    required
                  />
                </div>

                {/* Title Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Product Title
                  </label>
                  <input
                    {...register("title")}
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                    type="text"
                    placeholder='Enter product title'
                    required
                  />
                </div>

                {/* Price Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400 text-lg">₹</span>
                    <input
                      {...register("price")}
                      className='w-full pl-8 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder='0.00'
                      required
                    />
                  </div>
                </div>

                {/* Category Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <input
                    {...register("category")}
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                    type="text"
                    placeholder='Enter product category'
                    required
                  />
                </div>
              </div>

              {/* Description Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none'
                  rows="4"
                  placeholder='Enter product description'
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                >
                  🔄 Update Product
                </button>
                
                <button 
                  type="button"
                  onClick={deleteHandler}
                  className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-red-500/25"
                >
                  🗑️ Delete Product
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-xl text-gray-300">Loading...</p>
      </div>
    </div>
  )
}

export default ProductDetails