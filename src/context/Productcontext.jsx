import react,{ createContext, useContext, useEffect, useState } from "react";
export const Productcontext=createContext();
export default function ProductProvider({children}){
    const [products,setProducts]=useState([]);


async function display() {
   try{
             const response =await fetch("https://dummyjson.com/products");
            const data =await response.json();
            const product=data.products;
            setProducts(product);
            console.log(data);

        }catch(error){
            console.log("error",error);
        }
        
    
}
       useEffect(()=>{
        display();
       },[])
     
return(
    <Productcontext.Provider value={{products}}>
    ({children})
    </Productcontext.Provider>
)
}