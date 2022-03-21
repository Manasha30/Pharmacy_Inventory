import React, {Component} from "react";
import axios from 'axios';
import "./product.css";
class AddProduct extends Component{
    state={
        name: '',
        cost: ''
    }
    handleSubmit1=()=>{
        const{name,cost}=this.state;
        alert("Successfully updated cost");
    }
    render(){
        const{name} = this.state;
        const{cost} = this.state;
        return(
            <div className="product">
                <div>
                    <h1 className="NPtagline">ADD/UPDATE MEDICINE COST</h1>
                </div>
                <div className="AddProduct">
                    <h3 className="NPtitle">Medicine Cost</h3>
                    <form class="medicine">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter the Medicine name"
                            value={name}
                            onChange={(event)=> this.setState({name: event.target.value})}
                        />
                        <hr></hr>
                        <input
                            type="text"
                            name="cost"
                            placeholder="Enter the Medicine Cost"
                            value={cost}
                            onChange={(event)=> this.setState({cost: event.target.value})}
                        />
                        <div class="welcome">
                        <button className="CreateButton" type="submit"  onClick={()=>this.handleSubmit1()}><span></span> Update Cost </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 export default AddProduct;