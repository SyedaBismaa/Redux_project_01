import React from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
    
      const data = useSelector((state) => state.productsReducer.products);

    console.log(data);
    
    
  return (
  
    
    <div>Products</div>
  )
}

export default Products