import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncupdateuser } from '../../stores/actions/userAction';

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  // const products = useSelector((state) => state.productsReducer.products);


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


  const cartItems = users.cart.map((c, index) =>
    <li className='flex items-center justify-between  mb-10 bg-gray-600' key={c.product.id}>
      <img className='mr-10 mt-3 w-[10%]' src={c.product.image} alt="" />

      <span>{c.product.title}</span>
      <span>{c.product.price}</span>
      <p>
        <button
          onClick={() => DecreaseQuantityHandler(index, c)}
          className='text-xl'>-</button>
        <span className='mx-3 p-2 rounded bg-gray-500'>{c.quantity}</span>
        <button
          onClick={() => IncreaseQuantityHandler(index, c)}
          className='text-xl'>+</button>
      </p>

    </li>
  )

  return <div>{cartItems}</div>

}

export default Cart