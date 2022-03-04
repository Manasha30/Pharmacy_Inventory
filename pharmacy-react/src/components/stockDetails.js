import React, {Component} from "react";
class StockDetails extends Component{
    state={
        show: false
    }
    render(){
        const {name, total, stockEvents} = this.props;
        console.log(name);
        const {show} = this.state;
        return(
            <div className="stockDetails" onClick={() => this.setState({show: !show})}>
                <h3>Product: {name} | Total: {total}</h3>
                {show &&
                    <diV>
                        {stockEvents.map((event, i)=>(
                            <div key={i} className="StockEventTable_Card">
                                <p>Id: {event.id}</p>
                                <p>Type: {event.type}</p>
                                <p> Quantity: {event.qty}</p>
                                <p> Product Name: {event.product.name}</p>
                            </div>
                        ))}
                    </diV>
                }
            </div>
        );
    }
}
export default StockDetails;