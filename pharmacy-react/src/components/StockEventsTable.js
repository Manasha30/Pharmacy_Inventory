import React from "react";
import StockDetails from "./stockDetails";
import "./product.css";
function StockEventsTable(props){
    const products = [{id:1, name:"Dolo"},{id:2, name:"Crocin"},{id:3, name:"Saridon"},{id:4, name:"Naprosyn"},{id:5, name:"Citrem Plus"},{id:6, name:"Norvasc"},{id:5, name:"Ramipril"},{id:5, name:"Koflet"},{id:5, name:"Relief"},{id:5, name:"Hyoscine"},{id:5, name:"Loperamide"},{id:5, name:"Vomikind"},{id:5, name:"Avomine"}]
    const stockEvents = [{id:1, type:"paracetamol",qty:"3"},{id:2, type:"paracetamol",qty:"10"}]
    console.log(products);
    return(
        
        <div className="StockEventTable">
            <h1>Number of products available: {products.length}</h1>
            {products.map((product,index)=>(
                    <div className="StockEventTable__productsContainer" key={index}>
                        <StockDetails
                            name={product.name}
                            total="60"
                            stockEvents={stockEvents}
                        />
                    </div>
            ))}
        </div>
    );
}

export default StockEventsTable;