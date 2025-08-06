import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = useSelector((state) => state.productsReducer.products);

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
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md text-sm">
          Add to Cart
        </button>
      </div>
      <Link className='text-gray-900' to={`/products/${product.id}`}>More Info..</Link>
    </div>
  ));

  return products.length > 0 ? (
    <div className="w-full min-h-screen p-8 bg-gray-700">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {renderProducts}
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center text-xl">
      Loading...
    </div>
  );
};

export default Products;
