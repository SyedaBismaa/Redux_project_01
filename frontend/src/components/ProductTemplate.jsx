
import { Link } from 'react-router-dom';
import { asyncupdateuser } from '../stores/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductTemplate = ({product}) => {
   
    const users = useSelector((state) => state.userReducer.users);
    const dispatch = useDispatch();  
    
    const addTocartHandler = (product) => {
        const copyuser = { ...users, cart: [...users.cart] };
        const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id);
        if (x == -1) {
            copyuser.cart.push({ product, quantity: 1 })
        } else {
            copyuser.cart[x] = {
                product,
                quantity: copyuser.cart[x].quantity + 1,
            }
        }
        dispatch(asyncupdateuser(copyuser.id, copyuser))
    };
    
    return (
        <div className="group  rounded-2xl border-2 border-black overflow-hidden  transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            {/* Image Container */}
            <div className="relative overflow-hidden   p-3">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain rounded-[1rem] group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Content */}
            <div className="p-6">
                <h1 className="text-lg font-bold  mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors duration-200">
                    {product.title}
                </h1>
                
                <p className="text-sm  mb-4 line-clamp-3 leading-relaxed">
                    {product.description.slice(0, 100)}
                    {product.description.length > 100 && '...'}
                </p>
                
                {/* Price and Actions */}
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold ">
                            ₹{product.price}
                        </p>
                        <button
                            onClick={() => addTocartHandler(product)}
                            className="hover:from-blue-600 hover:to-purple-700  px-4 py-2 rounded-lg text-sm font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                        >
                            Add to Cart
                        </button>
                    </div>
                    
                    <Link 
                        to={`/products/${product.id}`}
                        className="text-center  hover:text-blue-600 font-medium text-sm py-2 px-4 rounded-lg border border-blue-700/30 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-200"
                    >
                        View Details →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductTemplate