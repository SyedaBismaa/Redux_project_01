import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetails from '../pages/admin/ProductDetails'
import UserProfile from '../pages/user/UserProfile'
import PageNotFound from '../pages/PageNotFound'
import AuthWrapper from './AuthWrapper'
import Cart from '../pages/user/Cart'

const MainRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Products />} />
      {/* <Route path="/products" element={}/> */}
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />

      <Route path="/products/:id" element={
        <AuthWrapper>
          <ProductDetails />
        </AuthWrapper>
      } />
      <Route path="/admin/create-product" element={
        <AuthWrapper>
          <CreateProduct />
        </AuthWrapper>

      } />
      <Route path="/admin/user-profile" element={
        <AuthWrapper>
          <UserProfile />
        </AuthWrapper>
      } />

      <Route path="/cart" element={
        <AuthWrapper>
          <Cart />
        </AuthWrapper>
      } />




      <Route path="*" element={<PageNotFound />} />


    </Routes>
  )
}

export default MainRoutes