import React from "react";
import { Productcontext } from "../context/productcontext";
export default function Cart() {
  const { cart, removeFromCart } = React.useContext(Productcontext);
  return (
    <div className="card-container  bg-sky-100 ">
       <h1 className="text-xl font-bold mt-10 text-center ">your cart</h1>  
      <div className="myshow">
       {cart.length === 0 ? (
        <p className="ml-100 mt-30">No items in cart</p>
      ) : (
        cart.map((item) => (
         <div className='show'>
           <div key={item.id} >
            <img src={item.thumbnail} alt={item.title} className=" w-45 ml-12 object-cover" />
            <h2 className="text-center">{item.title}</h2>
            <p className="text-center">Price: ${item.price}</p>
            <button className='remove-from-cart border-4 ml-12 ' onClick={()=>removeFromCart(item.id)}>Remove from Cart</button>
            </div> 
         </div>
        ))
      )}
    </div>
  </div>
  );
}