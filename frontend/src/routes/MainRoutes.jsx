import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from  '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'

const MainRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>



   </Routes>
  )
}

export default MainRoutes