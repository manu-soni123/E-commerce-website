import { useState } from "react";
// import react,{useState} from "react";
import {Link} from "react-router-dom";
export default function Login(){
     const [name,setname]=useState('');
   
    const [password,setpassword]=useState('');
    const handlesubmit=(e)=>{
        e.preventDefault();
        if (!name.length||  !password.length)
        {
            alert("plz fill all the fields");
            return;
        }
       const userData={
        name,
        
        password,
       };
       console.log(userData);
    };
    return(
        <div className="mylog1">
           <p>Manu</p>
          
         <div className="box1">
             {/* <div className="mylog3">
            <img className="h-1/4 w-4/4  ml-5 rounded-xl mt-40 ml-5 " src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?s=1024x1024&w=is&k=20&c=DDQn_dYm4qaOcMBuelgjfGM6xjvHZdHQ_Y08BhvsqaU="></img>
            </div>  */}
            
              <h4 className>Login</h4> 
        <div className="mylog"> 
            <form onSubmit={handlesubmit}>
                <div>
                     <label >Username</label> 
                    <input className="p-1" type="text" name="name" placeholder="enter your name" value={name} onChange={
                        (e)=>setname(e.target.value)}/>
                </div><br></br>
                 
                 <div>
                     <label>Password</label> 
                    <input className="p-1" type="password" name="password" placeholder="enter your password" value={password} onChange={
                        (e)=>setpassword(e.target.value)}/>
                </div><br></br>
                <button className="ml-25 " type="submit">submit</button>
                <div>
                    <p>Don't have an account ?</p>
                    <Link to="/Signup" className='link m-5'>sign-in</Link>
                    {/* <a href="#">Sign-in</a> */}
                </div>
        </form>
        </div>
        </div>
        </div>
        
        
    )

}
