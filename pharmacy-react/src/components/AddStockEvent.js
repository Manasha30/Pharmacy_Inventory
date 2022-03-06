import React, { Component } from 'react';
import axios from 'axios';
import "./product.css";
class AddStockEvent extends Component {
    state = { 
        qty: 0,
        type:'add',
        product:'no',
        show: false
     } 

    handleChange = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = async(event)=>{
        event.preventDefault()
        const{qty,type,product}=this.state;
        if(product !== 'no'){
            const data={
                qty,
                type,
                product: parseInt(product)
            }
            const AddStockRes=await axios({
                method:'POST',
                url: 'http://local:3000/stockevents',
                data
            })
            if(AddStockRes.status===200){
                alert("Success!")
                window.location=window.location.href;
            }
        }else{
            alert("No product chosen");
            return
        }
    }
    render() { 
        const { qty, type, product, show}=this.state;
        const {products}=this.props;
        return ( 
            <div className='stockpage'> 
                <div className='ASEtagline'>
                    <p className='ASEtitle'>The greatest wealth is health.</p>
                </div>
                <div className='AddStockEvent'>
                    <h1>Add Medicines</h1>
                    <button className='AddButton' onClick={()=> this.setState({show: !show})}>Add</button>
                    {show &&
                        <form onSubmit={this.handleSubmit}>
                            <div class="change">
                            <select
                                name="product"
                                value={product}
                                onChange={this.handleChange}
                            >
                            <option value='no'>Please Select a Medicine</option>
                            <option value="dolo">Dolo</option>
                            <option value="paracetamol">Paracetamol</option>
                            <option value="Crocin">Crocin</option>
                            <option value="Saridon">Saridon</option>
                            <option value="Naprosyn">Naprosyn</option>
                            <option value="Citrem Plus">Citrem Plus</option>
                            <option value="Norvasc">Norvasc</option>
                            <option value="Ramipril">Ramipril</option>
                            <option value="Relief">Relief</option>
                            <option value="Vomikind">Vomikind</option>
                            </select>
                            </div>
                            <hr></hr>
                            <div class="style">
                            <input
                                type="number"
                                name="qty"
                                value={qty}
                                onChange={this.handleChange}
                            />
                            </div>
                            <hr></hr>
                            <div class="content">
                            <select
                                name="type"
                                value={type}
                                onChange={this.handleChange}
                            >
                            <option value='add'>Add</option>
                            <option value='remove'>Remove</option>
                            </select>
                            <hr></hr>
                            <button className="ASEbutton">Submit</button>
                            </div>
                        </form>
                    }
                </div>
            </div>
        );
    }
}
 
export default AddStockEvent;
   