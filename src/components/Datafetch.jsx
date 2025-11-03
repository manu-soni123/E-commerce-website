import react, { useEffect } from 'react'

export default function Datafetch(){
     const items = ["apple", "banana", "mango", "carrot"];
    return(
         <div>
         <div>list</div>{
              items.map((items)=>(

                 <ul>
                     <li>{items}</li>
                 </ul>
             ))
             }
           


         </div>
    )
}


