import React, { Component } from 'react'
import "./CSS/homepage.css"
class Homepage extends Component {
    state = {  } 
    render() {
                return (
                
                    <div className ="homepage">
            
                      <h1 className='solid'>Pharmacy Inventory</h1>
                      <div class="button-container">
                        <a href="/Login"><button type="button"><span></span>LOGIN</button> </a>
                        <a href="/Register"><button type="button"><span></span>REGISTER</button> </a>  
                        </div>              
                    </div>   
            
                        );
            }
        }
        
        export default Homepage;
        