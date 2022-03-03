import React, { Component } from 'react'
import "./CSS/homepage.css"
class Homepage extends Component {
    state = {  } 
    render() {
                return (
        
                    <div>
                      <h1 class='solid'>Pharmacy Inventory</h1>
                        <center><a href="/Login"><button type="button"><span></span>LOGIN</button> </a></center>
                        <center><a href="/Register"><button type="button"><span></span>REGISTER</button> </a></center>                    

                        
                    </div>   
                        );
            }
        }
        
        export default Homepage;