import '../App.css'

export default function Contact() {
    return (
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.6.0/css/fontawesome.min.css" integrity="sha384-NvKbDTEnL+A8F/AA5Tc5kmMLSJHUO868P+lDtTpJIeQdGYaUIuLr4lVGOEA1OcMy" crossorigin="anonymous"></link>
        <div>
            <div className='mycontact'><div className='m'>
                <div className='content'>
                    <h2>Contact-us</h2>
                    <p>While Contact Us pages are meant to be helpful to users,<br></br> 
                    it’s important not to bombard them with too much information.</p>
                 </div>
                 <div className='container'>
                    <div className='mycontactinfo'><div>
                <div className='head'><h2>Get In Touch</h2></div>  
                        <div className='box20'>
                            <div className='icon'></div>
                                
                                <div className='text1'>
                                    <h2>Address:</h2>
                                    <p>Gandhi chowk gourjhamar,<br></br>
                                    Sagar (m.p.) <br></br> </p>
                                </div>
                            </div>
                       
                          <div className='box20'>
                            <div className='icon'> </div>
                                <div className='text1'>
                                    <h2>Phone:</h2>
                                    <p >6908654321  </p>
                                   
                                </div>
                            </div>
                       
                         <div className='box20'>
                            <div className='icon'></div>
                                <div className='text1'>
                                    <h2>Email:</h2>
                                    <p>manusoni0981@gmail.com  </p>
                                   
                                </div>
                            </div></div>
                   <div className='fo'>   
                     <form>
                        <h2>Thanks for visit..!</h2>
                        <div className='form1'>
                            <label>Name</label>
                    <input type="text" name="Name"  value={name} 
                        />
                        </div>
                       
                        <div className='form1'>
                               <label>Address</label>
                    <input type="text" name="Address"  
                        />
                        </div>                        <div className='form1'>
                               <label>massage</label>
                    <input type="text" name="massage"  
                        />
                        </div>
                         <button className='ml-25 '  type="submit">send</button>
                       </form></div>
                       
                    </div>
                 </div>
            </div>
          </div>
        </div>
        </>
            )
        }











        // <div className='connect' >
          
        //      <div className='box12 bg-red-500' ><h3 className='mr-20 mb-10 text-xl'>Contact-us</h3>
        //         <ul className='mycontact'>
        //             <li><a href="#">Name:Manu Soni</a></li><br></br>
        //             <li><a href="#">Address:Gandhi Chouk Sagar</a></li><br></br>
        //             <li><a href="#">Git-hub:https://github.com/username/repository.git</a></li><br></br>
        //             <li><a href="#">linked-in:https://www.linkedin.com/in</a></li>
        //         </ul>
                
        //     </div>
        //     </div>