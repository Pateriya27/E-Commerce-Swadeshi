import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './wishlist.css'
const Wishlist = ({wishlist,setWishlist,addtocart}) => {
    /*
  //increase qty
  const incqty = (product) => 
  {
    const exsit = wishlist.find((x) =>
    {
      return x.id === product.id
    })
    setWishlist(wishlist.map((curElm) =>
    {
      return curElm.id === product.id ? {...exsit, qty: exsit.qty + 1} : curElm
    }))
  }
  */
/*
 // decrease qty
  const decqty = (product) => 
  {
    const exsit = cart.find((x) =>
    {
      return x.id === product.id
    })
    setCart(cart.map((curElm) =>
    {
      return curElm.id === product.id ? {...exsit, qty: exsit.qty - 1} : curElm
    }))
  }
  */
  //remove cart Product
  const removeproduct = (product) =>
  {
    const exsit = wishlist.find((x) =>
    {
      return x.id === product.id
    })
    if(exsit.qty > 0)
    {
      setWishlist(wishlist.filter((x) =>
      {
        return x.id !== product.id
      }))
    }
  }
  //Total Price
 // const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
  return (
    <>
    <div className='wishlistcontainer'>
        {wishlist.length === 0 &&
        <div className='emptywishlist'>
        <h2 className='empty'>Wishlist is Empty</h2>
        <Link to='/product' className='emptywishlistbtn'>Shop Now</Link>
        </div>
        }
        <div className='contant'>
            {
               wishlist.map((curElm) => 
               {
                    return(
                        <div className='wishlist_item' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                </div>
                                <div className='detail'>
                                  <div className='info'>
                                    <h4>{curElm.cat}</h4>
                                    <h3>{curElm.Title}</h3>
                                    <p>Price:Rs.{curElm.Price}</p>
                                    <button onClick={() => addtocart (curElm)} className='addtocart'>Add to Cart</button>
                                    {/* <div className='qty'> 
                                       <button className='incqty' onClick={() => incqty(curElm)}>+</button> 
                                      <input type='text' value={curElm.qty}></input>
                                      <button className='decqty' onClick={() => decqty(curElm)}>-</button> 
                                    </div>
                                    <h4 className='subtotal'>sub total: ${curElm.Price*curElm.qty}</h4> */}
                                    </div>
                                    <div className='close'>
                                    <button onClick={() => removeproduct(curElm)}><AiOutlineClose /></button>
                                    </div>
                                </div>
                        </div>
                    )
               }) 
            }

        </div>
        {
          wishlist.length > 0 && 
          <>
            {/* <h2 className='totalprice'>total: ${Totalprice}</h2> */}
            {/* <button onClick={() => addtocart (curElm)} className='addtocart'>Add to Cart</button> */}
          </>
        }
    </div>
    </>
  )
}

export default Wishlist