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
                    <p className="NPtagline">Our biggest updates ever</p>
                </div>
                <div className="AddProduct">
                    <h3 className="NPtitle">Input a new Medicine</h3>
                    <form>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(event)=> this.setState({name: event.target.value})}
                        />
                        <button className="CreateButton" type="submit" onClick={()=>this.handleSubmit1()}>Create new Medicine</button>
                    </form>
                </div>
            </div>
        );
    }
}
 export default AddProduct;