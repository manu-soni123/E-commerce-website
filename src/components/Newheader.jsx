import React,{useContext} from "react";
import {Productcontext}from '../context/productcontext';
import '../App.css'
import {Link} from "react-router-dom";
import image from "../assets/com.jpg";


export default function Newheader(){
     const { cart, removeFromCart,totalcount ,searchTerm,setSearchTerm} = useContext(Productcontext);
    return(
        <>
        <div className='newdiv'>
           <Link to="/"><img src={image} alt='image' className="mt-2 ml-2 rounded-full" height={40} width={50}   /></Link>  
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
              <ul className='navlist mt-5  ml-70'> 
                   {/* <Link to="/" ><img src={image} alt='image' height={40} width={50}   /></Link>  */}
                    <Link to="/" className='link'>Products</Link>
                      <form action="">
                      <input className='bg-white  rounded-full  w-100 p-1 border-2 border-sky-200  ' type="text" placeholder="search" value={searchTerm}
                      onChange={(e)=>setSearchTerm(e.target.value)} />
                      </form>
                       <Link to="/Contact" className='link'>Contact</Link>
                       <Link to="/Cart" className="mycart"> <i className="fa fa-shopping-cart">{totalcount}</i></Link>
                       {cart.length > 0 && (
                       <span className="mycart1 mt-5">
                       {cart.length}
                      </span>
        )}
                       <Link to="/Signup" className='link'>SignUp</Link>
                        <Link to="/Login" className='link'>LogIn</Link>
                      </ul>
        </div>
        </>
    )
}




