import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncupdateuser } from '../../stores/actions/userAction';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const users = useSelector((state) => state.userReducer.users);

  const IncreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity + 1,
    };
    console.log(copyuser);

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const DecreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    if (users.cart[index].quantity > 0) {
      copyuser.cart[index] = {
        ...copyuser.cart[index],
        quantity: copyuser.cart[index].quantity - 1,
      }
    } else {
      copyuser.cart.splice(index, 1);
    }

    console.log(copyuser);
    dispatch(asyncupdateuser(copyuser.id, copyuser));
  }
  const clickHandler = ()=>{
     navigate("/");
  }
  const cartItems = users.cart.map((c, index) =>
    <div 
      key={c.product?.id} 
      className="bg-white/5 backdrop-blur-sm border border-black/50 rounded-xl p-6 mb-6 hover:bg-white/10 transition-all duration-200"
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img 
            className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg bg-white/10 p-2" 
            src={c.product?.image} 
            alt={c.product?.title} 
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-semibold  mb-2">{c.product?.title}</h3>
          <p className="text-2xl font-bold  mb-2">₹{c.product?.price}</p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => DecreaseQuantityHandler(index, c)}
            className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold transition-all duration-200 hover:scale-110"
          >
            -
          </button>
          
          <span className="px-4 py-2 bg-black/10 rounded-lg  font-semibold text-lg min-w-[60px] text-center">
            {c.quantity}
          </span>
          
          <button
            onClick={() => IncreaseQuantityHandler(index, c)}
            className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold transition-all duration-200 hover:scale-110"
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <div className="text-center">
          <p className="text-sm  mb-1">Total</p>
          <p className="text-xl font-bold ">₹{c.product?.price * c.quantity}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-5xl font-bold mb-4  ">
            Shopping Cart
          </h1>
          <p className="text-xl text-gray-900">
            {users.cart.length > 0 ? `You have ${users.cart.length} item(s) in your cart` : 'Your cart is empty'}
          </p>
        </div>

        {/* Cart Items */}
        {users.cart.length > 0 ? (
          <div className="space-y-4">
            {cartItems}
            
            {/* Cart Summary */}
            <div className="bg-white/5 backdrop-blur-sm border border-black/50 rounded-xl p-6 mt-8">
              <div className="flex justify-between items-center">
                <span className="text-xl ">Total Items:</span>
                <span className="text-2xl font-bold ">
                  {users.cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                <span className="text-2xl ">Total Amount:</span>
                <span className="text-3xl font-bold ">
                  ₹{users.cart.reduce((total, item) => total + (item.product?.price * item.quantity), 0)}
                </span>
              </div>
              <button className="w-full mt-6 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-green-500/25">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-3xl font-semibold  mb-4">Your cart is empty</h2>
            <p className=" mb-8">Start shopping to add items to your cart</p>
            <button
            onClick={clickHandler}
             className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
              Browse Products
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart