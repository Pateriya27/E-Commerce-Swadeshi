import React, { useState } from 'react'
import {  Link  } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import { AiOutlineShoppingCart,AiOutlineCloseCircle } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart} from 'react-icons/ai';
import Homeproduct from './homeproduct';
import './home.css'
const Home = ({detail , view, close, setClose, addtocart ,addtowishlist}) => {
    const [homeProduct,setHomeProduct] = useState(Homeproduct)
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
                                    <p>Our Products are Premium and 100% Natural which are licensed by fssai</p>
                                    <h3>₹{curElm.Price}</h3>
                                    <button onClick={() => addtocart (curElm)}>Add to Cart</button>
                                </div>
                            </div>
                        ) 
                })
            }
            <div className='productbox'></div>
        </div>
    </div> :null
    }
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>Welcome To Our Herbal Store</h2>
            {/* <BrowserRouter>        //for newer version of react router dom it does not support a Router Inside Another Router */}
           <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
          {/* </BrowserRouter> */}
            </div>
            <div className='img_box'>
                <img src='./img/slider.jpg' alt='sliderimg' width='900px' height='410px' ></img>
            </div>
        </div>
    </div>
    <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/ban.jpg' alt='herbaloil'></img>
                </div>
                <div className='detail'>
                   <h4>Herbal Oil</h4>
                    <p>23 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/herbal-powder-removebg-preview.png' alt='herbpowder'></img>
                </div>
                <div className='detail'>
                <h4>Herbal Powder</h4>
                    <p>52 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/face1.png' alt='facewash'></img>
                </div>
                <div className='detail'>
                <h4>Herbal Facewash</h4>
                    <p>18 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/powder.png' alt='powder'></img>
                </div>
                <div className='detail'>
                <h4>Awla Powder</h4>
                    <p>18 products</p>
                </div>
            </div>
        </div>
    </div>
    <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
            {
                homeProduct.map((curElm) => 
                {
                    return(
                         <div className='box' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                                <div className='icon'>
                                    <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
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
                    )
                })
            }
        </div>
    </div>
    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                    <FiTruck />
                </div>
                <div className='detail'>
                    <h3>Free Shipping</h3>
                    <p>order above ₹1000</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <FaIndianRupeeSign />
                </div>
                <div className='detail'>
                    <h3>Return & Refund</h3>
                    <p>Money Back Guarrenty</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <CiPercent />
                </div>
                <div className='detail'>
                    <h3>Member Discount</h3>
                    <p>On every order</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <BiHeadphone />
                </div>
                <div className='detail'>
                    <h3>Customer Support</h3>
                    <p>Every Time Call Support</p>
                </div>
            </div>
        </div>
    </div>
    <div className='banner'>
        <div className='container'>
        <div className='detail'>
            <h4>LATEST PRODUCT ADDED</h4>
            <h3>Speed Growth Capsule Advanced Herbal Formula To Increase Height</h3>
            <p>₹ 499</p>
            <Link to='/product' className='link'>Shop Now  <BsArrowRight /></Link>
        </div>
        <div className='img_box'>
            <img src='./img/NEW.png' alt='slider'></img> 
        </div>
        </div>
    </div>
    </>
  )
}

export default Home