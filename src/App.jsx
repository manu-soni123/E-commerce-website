 import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
import './App.css'
 import Header from './components/header'
 import Newhome from './components/Newhome'
 import Footer from './components/Footer'
 import Counter from './components/Counter'
 import Datafetch from './components/Datafetch' 
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Contact from './components/contact'
import ProductProvider from './context/productcontext'
import Productcard from './components/Productcard'
import Newheader from './components/Newheader'
import Newfooter from './components/Newfooter'
import Signup from './components/Signup'
import Login from './components/Login'
import Cart from './components/Cart'

function App() {
   return (
    <>
    <BrowserRouter>
    <ProductProvider>
     <Newheader/> 
    
    
  
         {/* <Header/>   */}
       <Routes>
         <Route path="/" element={<Productcard/>}/> 
        
         {/* <Route path="/Home" element={<Home/>}/> */}
         
         <Route path="/Contact" element={<Contact/>}/> 
          <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Cart" element={<Cart/>}/>
       </Routes>
      
       
    <Newfooter/>
           {/* <Datashow/>
        <Header/>
      <Newhome/> 
     <Footer/>
     <Counter/> 
     <Datafetch/>           */}
     
    </ProductProvider>
    </BrowserRouter>
    
    </>
  )
}
 export default App;
