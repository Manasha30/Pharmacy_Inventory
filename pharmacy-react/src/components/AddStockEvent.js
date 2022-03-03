import React, { Component } from 'react';
import axios from 'axios';
import '../index.css'
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
            <div> 
                <div className='ASEtagline'>
                    <p className='ASEtitle'>The greatest wealth is health.</p>
                </div>
                <div className='AddStockEvent'>
                    <h1>Add Stock Event</h1>
                    <button className='AddButton' onClick={()=> this.setState({show: !show})}>Add</button>
                    {show &&
                        <form onSubmit={this.handleSubmit}>
                            <select
                                name="product"
                                value={product}
                                onChange={this.handleChange}
                            >
                            <option value='no'>Please Select a product</option>
                            {product.localeCompare((product,i)=>(
                                <option key={i} value={product.id}>
                                    {product.name}
                                </option>
                            ))}
                            </select>

                            <input
                                type="number"
                                name="qty"
                                value={qty}
                                onChange={this.handleChange}
                            />
                            <select
                                name="type"
                                value={type}
                                onChange={this.handleChange}
                            >
                            <option value='add'>Add</option>
                            <option value='remove'>Remove</option>
                            </select>
                            <button className="ASEbutton">Submit</button>
                        </form>
                    }
                </div>
            </div>
        );
    }
}
 
export default AddStockEvent;
   