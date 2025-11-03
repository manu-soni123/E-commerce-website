import '../App.css'
import {Link} from "react-router-dom";
import image from "../assets/log.png"
export default function Newheader(){
    return(
        <>
        <div className='newdiv'>
              <ul className='navlist'> 
                   
                   
                    <Link to="/" ><img src={image} alt='image' height={60} width={60} className='mb-10'  /></Link>
                      {/* <Link to="/Home" className='link'>Home</Link> */}
                       <Link to="/" className='link'>Product</Link>
                      <Link to="/Contact" className='link'>Contact</Link>
                       <Link to="/Signup" className='link'>Sign-up</Link>
                        <Link to="/Login" className='link'>Log-in</Link>
                      
                    
                   </ul>
        </div>
        </>
    )
}