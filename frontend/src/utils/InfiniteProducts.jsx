import React, { useEffect, useState } from 'react'
import { loadlazyproduct } from '../stores/reducers/productSlice';
import axios from "../api/axiosconfig"
import { useDispatch, useSelector } from 'react-redux';


const InfiniteProducts = () => {
      const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer)
  const [hasMore, sethasMore] = useState(true);


      const fetchproducts = async () => {
        try {
          const { data } = await axios.get(`/products?_limit=6&_start=${products.length}`)
    
          if (data.length == 0) {
            sethasMore(false)
          } else {
            sethasMore(true)
            dispatch(loadlazyproduct(data));
          }
    
    
        } catch (error) {
          console.log(error);
        }
      };

        useEffect(() => {
    fetchproducts();
  }, [])



  return {fetchproducts, hasMore,products};
}

export default InfiniteProducts