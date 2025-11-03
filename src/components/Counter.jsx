import { useState } from "react";
export default function Counter(){
    const[count,setcount]=useState(0);
    const handleincrease=()=>{
        setcount(count+1);
    }

    const handledecrease=()=>{
        setcount(count-1);
    }
    return(
<div>
    <h1>counter:{count}</h1>  
    <button className="btn" onClick={handleincrease}>increase</button>
     <button className="btn" onClick={handledecrease}>decrease</button>
</div>
    )

}

