import React, { Component } from 'react'
import "./CSS/homepage1.css"
class Homepage1 extends Component {
    state = {  } 
    render() {
                return (
                
                    <div className ="homepage">
            
                      <h1 className='solid'>Pharmacy Inventory</h1>
                      <div class="button-container">
                        <a href="/products"><button type="button"><span></span>PRODUCTS</button> </a>
                        <a href="/StockEvents"><button type="button"><span></span>STOCKEVENTS</button> </a>
                        <a href="/MedicineInventory"><button type="button"><span></span>MEDICINE INVENTORY</button> </a> 
                        </div>              
                    </div>   
            
                        );
            }
        }
        
        export default Homepage1;
