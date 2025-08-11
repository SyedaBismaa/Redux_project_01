import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncupdateuser } from '../stores/actions/userAction';
import axios from "../api/axiosconfig"
import InfiniteScroll from "react-infinite-scroll-component"
const Products = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  // const products = useSelector((state) => state.productsReducer.products);

  const [products,setproducts] = useState([])
  const [hasMore, sethasMore] = useState(true)
 const fetchproducts = async () =>{
  try{
      const {data} = await axios.get(`/products?_limit=6&_start=${products.length}`)
      
      if(data.length==0){
    sethasMore(false)
      }else{
        sethasMore(true)
           setproducts([...products,...data]);
      }
     
      
  }catch(error){
console.log(error);
  }
 };

  useEffect(()=>{
    fetchproducts();
  },[])



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




  const renderProducts = products.map((product) => (
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
        {product.description.slice(0, 100)}...
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
  ));

  return products.length > 0 ? (
    <div className="w-full min-h-screen p-8 bg-gray-700">
      <h1 className="text-3xl font-bold mb-6 ">Products</h1>
      <div className=" gap-6">
       
       <InfiniteScroll
       className='overflow-auto flex flex-wrap gap-5'
       dataLength={products.length}
       next={fetchproducts}
       hasMore={hasMore }
       loader={<h4>Loading....</h4>}
       endMessage={
        <p style={{textAlign:"center"}}> <b>Yay! you have seen it all</b></p>
       }
       >
             <Suspense
              fallback={
                <h1 className="text-center text-3xl text-yellow-500">
                  LOading____
                </h1>

              }
              
              >
              
             {renderProducts}
              </Suspense>
       </InfiniteScroll>
        


      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center text-xl">
      Loading...
    </div>
  );
};

export default Products;
