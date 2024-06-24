import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart} from 'react-icons/ai';
import { HiCurrencyRupee } from "react-icons/hi2";
import { BsCashCoin } from "react-icons/bs";
import { BsBagCheck} from 'react-icons/bs';
import { AiOutlineUser} from 'react-icons/ai';
import { CiLogin} from 'react-icons/ci';
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css' 
const Nav = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect,logout,user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className='bar'>
     <marquee className='marquee'>  
    <div className='free'>
            {/* <div className='icon'>
            <FaTruckMoving /> 
                </div> */}  
                <h4> Get upto 20% Cashback On Every Online Payments &nbsp;&nbsp;&nbsp;</h4>
                <h5> *FREE DELIVERY &nbsp;&nbsp;&nbsp;  *PAY ON DELIVERY &nbsp;&nbsp;&nbsp;  *EASY RETURNS</h5>      
    </div>
    </marquee>  
    </div> 
    <div className='main_header' >
        <div className='container' >
           
            <div className='search_box'>
                <input type='text' value={search} placeholder='Search Your Product.....' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={() => searchbtn (search)}>Search</button>
                </div>
                <div className='logo'>
                <img src='./img/1.png' height='90px' alt='logo'></img>
            </div>
                <div className='icon'>
                    {
                        isAuthenticated &&
                        <div className='account'>
                        <div className='user_icon'>
                        <AiOutlineUser />
                        </div>
                    <p>Hello,{user.name}</p>
                    </div>
                    }
                    <div className='second_icon'>
                        <Link to="/wishlist" className='link'><AiOutlineHeart /></Link>
                        <Link to="/cart" className='link'><BsBagCheck /></Link>
                    </div>
                </div>
            </div>
        </div>
    <div className='header'>
        <div className='container'>
            <div className='nav'>
            <ul>
                <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/product' className='link'>Product</Link>
                </li>
                <li>
                    <Link to='/about' className='link'>About</Link>
                </li>
                <li>
                    <Link to='/contact' className='link'>Contact</Link>
                </li>
            </ul>
            </div>
            <div className='auth'>
                {
                    isAuthenticated ?
                     <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button> 
                     :
                     <button onClick={() => loginWithRedirect()}> <CiLogin /></button>
                }
              
              
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav