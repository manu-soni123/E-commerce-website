import { useState } from "react";
// import react,{useState} from "react";
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
         <div className="box1"><div className="mylog2">
             <h4 className="mt-5">Login</h4>
        <div className="mylog"> 
            <form onSubmit={handlesubmit}>
                <div>
                     <label >FullName</label> 
                    <input  type="text" name="name" placeholder="enter your name" value={name} onChange={
                        (e)=>setname(e.target.value)}/>
                </div><br></br>
                 
                 <div>
                     <label>Password</label> 
                    <input type="password" name="password" placeholder="enter your password" value={password} onChange={
                        (e)=>setpassword(e.target.value)}/>
                </div><br></br>
                <button className="ml-25" type="submit">submit</button>
                <div>
                    <p>Don't have an account ?</p>
                    <a href="#">Sign-in</a>
                </div>
                

            </form></div>
        </div>
        </div>
        </div>
    )

}
