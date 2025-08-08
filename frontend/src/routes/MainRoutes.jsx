import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from  '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetails from '../pages/admin/ProductDetails'
import { useSelector } from 'react-redux'
import UserProfile from '../pages/user/UserProfile'

const MainRoutes = () => {
  const {users} = useSelector((state)=>state.userReducer)
  
  return (
   <Routes>
    <Route path="/" element={ users? <Products/> :<Home/>}/>
    {/* <Route path="/products" element={}/> */}
    <Route path="/login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>


    <Route path="/products/:id" element={<ProductDetails/>}/>
    <Route path="/admin/create-product" element={<CreateProduct/>}/>
    <Route path="/admin/user-profile" element={<UserProfile/>}/>


   </Routes>
  )
}

export default MainRoutes