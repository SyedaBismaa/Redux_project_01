
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
        <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col"
        >
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
            />
            <h1 className="text-lg font-semibold mb-1">{product.title}</h1>
            <p className="text-sm text-gray-600 mb-3">
                {product.description.slice(0,100)}
            </p>
            <div className="mt-auto flex justify-between items-center">
                <p className="text-blue-600 font-bold text-lg">₹{product.price}</p>
                <button
                    onClick={() => addTocartHandler(product)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md text-sm">
                    Add to Cart
                </button>
            </div>
            <Link className='text-gray-900' to={`/products/${product.id}`}>More Info..</Link>
        </div>
    )
}

export default ProductTemplate