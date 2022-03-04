import React, { Component } from 'react'
import "./CSS/homepage.css"
class Homepage extends Component {
    state = {  } 
    render() {
                return (
        
                    <div>
                      <h1 class='solid'>Pharmacy Inventory</h1>

                       <p id="demo">The pharmacy inventory process helps track the amount of medication<br></br> that is available and helps reduce costs and monitor expired medications</p>
                       
                        <center><a href="/Login"><button type="button"><span></span>LOGIN</button> </a></center>
                        <center><a href="/Register"><button type="button"><span></span>REGISTER</button> </a></center>                     
                
                     <div className ="homepage"> 
            
                      <h1 className='solid'>Pharmacy Inventory</h1>
                      
                      <div class="button-container">
                        <a href="/Login"><button type="button"><span></span>LOGIN</button> </a>
                        <a href="/Register"><button type="button"><span></span>REGISTER</button> </a>  
                              </div>
                              </div>   
                    </div>   
            
                        );
            }
        
}
export default Homepage;
        