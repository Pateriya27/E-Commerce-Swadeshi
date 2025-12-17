import React from 'react'
import Productdetail from './productdetail'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart,AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import './product.css'
const Product = ({product, setProduct, detail , view, close, setClose, addtocart, addtowishlist}) => {

    const { loginWithRedirect,isAuthenticated } = useAuth0();

    const filtterproduct = (product) =>
    {
        const update = Productdetail.filter((x) =>
        {
          return  x.cat === product;
        })
        setProduct(update); 
    }
  const  Allproducts = () => 
  {
    setProduct(Productdetail)
  }
  return (
    <>
    {
        close ?
        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                detail.map((curElm) =>
                {
                        return(
                            <div className='productbox'>
                                <div className='img-box'>
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                </div>
                                <div className='detail'>
                                    <h4>{curElm.cat}</h4>
                                    <h2>{curElm.Title}</h2>
                                    <p>Best Quality Product certified by fssai</p>
                                    <h3>₹{curElm.Price}</h3>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        ) 
                })
            }
            <div className='productbox'></div>
        </div>
    </div> :null
    }
<div className='products'>
<h2># Products</h2>
  <p>Home . products</p>
    <div className='container'>
        <div className='filter'>
            <div className='categories'>
                <h3>categories</h3>
                <ul>
                <li onClick={() => Allproducts ()}>All Products</li>
                    <li onClick={() => filtterproduct ("Herbal Powder")}>Herbal Powder</li>
                    <li onClick={() => filtterproduct ("Herbal Juice")}>Herbal Juice</li>
                    <li onClick={() => filtterproduct ("Herbal Facewash")}>Herbal Facewash</li>
                    <li onClick={() => filtterproduct ("Herbal Oil")}>Herbal Oil</li>
                    <li onClick={() => filtterproduct ("Herbal Capsule")}>Herbal Capsule</li>
                    {/* <li onClick={() => filtterproduct ("Heat pipe")}>Heat pipe</li> */}
                    {/* <li onClick={() => filtterproduct ("Gaming")}>Gaming</li> */}
                    {/* <li onClick={() => filtterproduct ("Pen Drive")}>Pen Drive</li> */}
                    {/* <li onClick={() => filtterproduct ("Mouse")}>Mouse</li> */}
                    {/* <li onClick={() => filtterproduct ("Back Cover")}>Back Cover</li> */}
                    {/* <li onClick={() => filtterproduct ("Television")}>Television</li> */}
                </ul>
            </div>
        </div>
        <div className='productbox'>
            <div className='contant' >
                {
                  product.map((curElm) =>
                   {
                    return(
                        <>
                      <div className='box' key={curElm.id}>
                        <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                                <div className='icon'>
                                    {
                                        isAuthenticated ?
                                        <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                        :
                                        <li onClick={() => loginWithRedirect()}><AiOutlineShoppingCart /></li>
                                    }
                                    <li onClick={() => view (curElm)}><BsEye /></li>
                                    <li onClick={() => addtowishlist (curElm)}><AiOutlineHeart /></li>  
                                </div>
                            </div>
                            <div className='detail'>
                                <p>{curElm.cat}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>₹{curElm.Price}</h4>
                            </div>
                         </div> 
                        </>
                    )
                   }) 
                }
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Product