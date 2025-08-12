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
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Create Product
          </h1>
          <p className="text-xl text-gray-300">Add a new product to your store</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(CreateProductHandler)}
          className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl'
        >
          <div className="space-y-6">
            {/* Image URL Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Product Image URL
              </label>
              <input
                {...register("image")}
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200'
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
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200'
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
                  className='w-full pl-8 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200'
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder='0.00'
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
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none'
                rows="4"
                placeholder='Enter product description'
                required
              />
            </div>

            {/* Category Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category
              </label>
              <input
                {...register("category")}
                className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200'
                type="text"
                placeholder='Enter product category'
                required
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
            >
              ✨ Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct