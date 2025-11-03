import '../App.css'
import {Link} from "react-router-dom"
export default function Header(){
    return(
        <>
        <div className='newdiv'>
              <ul className='navlist'> 
                   
                    <Link to="/Newhome">Newhome</Link>
                     <Link to="/">HOME</Link>
                     {/* <li><a href="#">HOME</a></li> */}
                    <li><a href="#">BUSINESS</a></li>
                    <li><a href="#">PEOPLE</a></li>
                    <li><a href="#">SERVEY</a></li>
                    <li><a href="#">DEPARTMENTS</a></li>
                    <li><a href="#">GEO_PORTAL</a></li>
                    
                   </ul>
        </div>
        </>
    )
}