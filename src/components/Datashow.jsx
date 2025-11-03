import { useEffect, useState } from "react";

export default function Datashow(){
     const [product ,setProducts]=useState([]);
    async function display() {
        try{
             const response =await fetch("https://dummyjson.com/products");
            const data =await response.json();
            const product=data.products;
            setProducts(product);
            console.log(data);

        }catch(error){
            console.log("error",error)
        }
        
    
}
       useEffect(()=>{
        display();
       },[])
return(
    <div>{product.map((product)=>(
        
        <div key={product.id}>
          <h2>{product.title}</h2> 
          <p>{product.discription}</p> 
          <p>price:{product.price}</p>
          <p>rating:{product.rating}</p>
          <img src={product.thumbnail} alt={product.title}/>
          
        </div>
        ))}

    </div>
  
)
      
      
       
}