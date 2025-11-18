import react,{ createContext, useContext, useEffect, useState } from "react";
export const Productcontext=createContext();
export default function ProductProvider({children}){
    const [products,setProducts]=useState([]);
    const[searchTerm,setSearchTerm]=useState('');
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
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
         const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

       const addToCart = (product) => {
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.id === product.id);
    if (existing) {
      return prevCart;
      // .map((item) =>
      //   item.id === product.id
      //     ? { ...item }
      //     : item
      // );
    } else {
      return [...prevCart, { ...product}];
    }
  });
  setCount(cart.length + 1);
  console.log(`Added to cart: ${product.title}`);
};
     const removeFromCart = (productId) => {
  setCart((prevCart) =>
    prevCart.filter((item) => item.id !== productId)
  );
}
const totalCount = cart.reduce((sum) => sum + 1, 0);
return(
    <Productcontext.Provider value={{products,addToCart,removeFromCart,cart,searchTerm,filteredProducts,setSearchTerm,totalCount}}>
    ({children})
    </Productcontext.Provider>
)
}