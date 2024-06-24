import React ,{useState} from 'react'
import Nav from './nav'
import {BrowserRouter} from 'react-router-dom';
import Rout from './rout';
import Footer from './footer';
import Productdetail from './productdetail';
const App = () => {
  //add to cart
  const [cart,setCart] = useState([])
  //add to wishlist
  const [wishlist,setWishlist] = useState([])
  //product detail
  const [close,setClose] = useState(false)
  const [detail,setDetail] = useState([])
  //filter Product
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) => 
  {
    const change = Productdetail.filter((x) =>
    {
      return x.cat === product
    })
    setProduct(change)
  }
  // product detail
  const view = (product) =>
  {
    setDetail([{...product}])
    setClose(true)
  }
  //add to cart

  const addtocart = (product) =>
  {
    const exsit = cart.find((x) =>
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("This product is already added to the cart")
    }
    else
    {
      setCart([...cart, {...product, qty:1}])
      alert("Product is Added")
    }
  }
  //wishlist
  const addtowishlist = (product) =>
  {
    const exsit = wishlist.find((x) =>
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("This product is already added to the wishlist")
    }
    else
    {
      setWishlist([...wishlist, {...product, qty:1}])
      alert("Product is Added")
    }
  }
  return (
    <>
    <BrowserRouter>
    < Nav searchbtn={searchbtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} wishlist={wishlist} setWishlist={setWishlist} addtowishlist={addtowishlist}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App