import { useState } from "react";
import { Link } from "react-router-dom";
// import react,{useState} from "react";
export default function Signup(){
     const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const handlesubmit=(e)=>{
        e.preventDefault();
        if (!name.length|| !email.length || !password.length)
        {
            alert("plz fill all the fields");
            return;
        }
       const userData={
        name,
        email,
        password,
       };
       console.log(userData);
    };
    return(
        <>
        <div className="sign"> <p>manu</p>
            < div className="sign1"><div className="side1">
                <img className="h-1/2 w-3/4  ml-5 rounded-xl mt-25 ml-10 " src="https://www.mindinventory.com/blog/wp-content/uploads/2022/10/button.png"></img></div>
                   <div className="side2">
                      <div className="myform" ><h3 className="p-1">Sign-in to explore</h3>
                      <form onSubmit={handlesubmit}>
                <div>
                     <label >Fullname</label>
                     <input className="p-1" type="text" name="Name" placeholder="enter your name" value={name} onChange={
                        (e)=>setname(e.target.value)}/>
                </div><br></br>
                 <div>
                   <label>E-mailID</label>
                    <input className="p-1" type="email" name="Email" placeholder="enter your email" value={email} onChange={
                        (e)=>setemail(e.target.value)}/>
                </div><br></br>
                 <div>
                    <label>password</label>
                    <input className="p-1" type="password" name="Password" placeholder="enter your password" value={password} onChange={
                        (e)=>setpassword(e.target.value)}/>
                </div><br></br>
                <button className="ml-25 p-1" type="submit">submit</button>
                <div>
                    <p>already have an account ?</p>
                    <Link to="/Login"><p className="text-center">Log-in</p></Link>
                </div>
            </form>
        </div>
      </div>
    </div>
</div> 
</>
)
}







//  const [name,setname]=useState('');
//     const [email,setemail]=useState('');
//     const [password,setpassword]=useState('');
//     const handlesubmit=(e)=>{
//         e.preventDefault();
//         if (!name.length|| !email.length || !password.length)
//         {
//             alert("plz fill all the fields");
//             return;
//         }
//        const userData={
//         name,
//         email,
//         password,
//        };
//        console.log(userData);
//     };
//     return(
//        <div className="box1"><div className="myform"><h3>Signup</h3>
//             <form onSubmit={handlesubmit}>
//                 <div>
//                     <label>name</label>
//                     <input type="text" name="Name" placeholder="enter your name" value={name} onChange={
//                         (e)=>setname(e.target.value)}/>
//                 </div><br></br>
//                  <div>
//                     <label>email</label>
//                     <input type="email" name="Email" placeholder="enter your email" value={email} onChange={
//                         (e)=>setemail(e.target.value)}/>
//                 </div><br></br>
//                  <div>
//                     <label>password</label>
//                     <input type="password" name="Password" placeholder="enter your password" value={password} onChange={
//                         (e)=>setpassword(e.target.value)}/>
//                 </div><br></br>
//                 <button type="submit">submit</button>
//                 <div>
//                     <p>already have an account ?
//                     <a href="#">login</a></p>
//                 </div>
                

//             </form>
//         </div></div>
//     )

