import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Product from './product'
import Cart from './cart'
import Contact from './contact'
import Wishlist from './wishlist'
const Rout = ({product, setProduct,detail, view, close, setClose, cart, setCart, addtocart, wishlist,setWishlist,addtowishlist}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}  wishlist={wishlist} setWishlist={setWishlist} addtowishlist={addtowishlist} />}/>
        <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}  wishlist={wishlist} setWishlist={setWishlist} addtowishlist={addtowishlist}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}  wishlist={wishlist} setWishlist={setWishlist}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/wishlist' element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} addtowishlist={addtowishlist} addtocart={addtocart}/>} />
    </Routes>
    </>
  )
}

export default Rout