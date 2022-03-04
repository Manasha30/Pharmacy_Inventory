import React, {Component} from "react";
import axios from 'axios';
import "./product.css";
class AddProduct extends Component{
    state={
        name: ''
    }
    handleSubmit1=()=>{
        const{name}=this.state;
        alert("Successfully Created new Medicine");
    }
    render(){
        const{name} = this.state;
        return(
            <div className="product">
                <div>
                    <h1 className="NPtagline">The Medicines You Wish To Buy</h1>
                </div>
                <div className="AddProduct">
                    <h3 className="NPtitle">Medicine Name</h3>
                    <form class="medicine">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter the Medicine name"
                            value={name}
                            onChange={(event)=> this.setState({name: event.target.value})}
                        />
                        <div class="welcome">
                        <button className="CreateButton" type="submit"  onClick={()=>this.handleSubmit1()}><span></span> Add new medicine </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 export default AddProduct;