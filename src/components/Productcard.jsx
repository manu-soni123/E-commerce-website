import react, { useContext } from "react";
import '../app.css'
import {Productcontext}from '../context/productcontext';
import { Link } from "react-router-dom";
export default function Productcard(){
    const {products}=useContext(Productcontext);
    return(
        <>
        <div className="product">
        {products?.map((product)=>(
        <div className="bg-sky-100"  key={product.id}  style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
       <h2 className="ml-20">{product.title}</h2> 
          <p>{product.discription}</p> 
          <p>price:{product.price}</p>
          <p>rating:{product.rating}</p>
          <img  src={product.thumbnail} className="myimg" alt={product.title}/></div>
          
        ))}
</div> 
</>
        )
}