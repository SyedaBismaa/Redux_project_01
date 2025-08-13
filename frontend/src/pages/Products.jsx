import React, { lazy, Suspense } from 'react';
import InfiniteScroll from "react-infinite-scroll-component"
const ProductTemplate = lazy(() => import("../components/ProductTemplate"));
import useInfiniteProducts from '../utils/InfiniteProducts';

const Products = () => {

  const {products , fetchproducts, hasMore} =  useInfiniteProducts();

  return (
    <div className="min-h-screen bg-gray-100  p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 gap-7">
          <input
          className='border-2 rounded-[1rem]  text-gray-800 p-3  w-[40rem]  outline-none'
           type="text"placeholder='search your product' />
          <button className='ml-3  border-2 px-6 py-2 rounded-[1rem]'>Search</button>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <InfiniteScroll
            className='overflow-auto'
            dataLength={products.length}
            next={fetchproducts}
            hasMore={hasMore}
            loader={
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-lg">Loading more products...</span>
              </div>
            }
            endMessage={
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <p className="text-2xl font-semibold text-green-400 mb-2">Yay! You've seen it all</p>
                <p className="text-gray-400">Check back later for new products!</p>
              </div>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Suspense
                  key={product.id}
                  fallback={
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 animate-pulse">
                      <div className="bg-gray-600 h-48 rounded-lg mb-4"></div>
                      <div className="bg-gray-600 h-4 rounded mb-2"></div>
                      <div className="bg-gray-600 h-3 rounded mb-4"></div>
                      <div className="bg-gray-600 h-6 rounded w-1/2"></div>
                    </div>
                  }
                >
                  <ProductTemplate key={product.id} product={product} />
                </Suspense>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  )
};

export default Products
