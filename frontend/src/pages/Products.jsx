import React, { lazy, Suspense } from 'react';
import InfiniteScroll from "react-infinite-scroll-component"
const ProductTemplate = lazy(() => import("../components/ProductTemplate"));
import useInfiniteProducts from '../utils/InfiniteProducts';
const Products = () => {

  const {products , fetchproducts, hasMore} =  useInfiniteProducts();

  return (
    <div className="w-full min-h-screen p-8 bg-gray-700">
      <h1 className="text-3xl font-bold mb-6 ">Products</h1>
      <div className=" gap-6">

        <InfiniteScroll
          className='overflow-auto flex flex-wrap gap-5'
          dataLength={products.length}
          next={fetchproducts}
          hasMore={hasMore}
          loader={<h4>Loading....</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}> <b>Yay! you have seen it all</b></p>
          }
        >
          {products.map((product) => (
            <Suspense
              key={product.id}
              fallback={
                <h1 className="text-yellow-500 text-center text-xl">
                  Loading....
                </h1>
              }
            >
              <ProductTemplate key={product.id} product={product} />
            </Suspense>
          ))}


        </InfiniteScroll>



      </div>
    </div>
  )

};

export default Products;
