import React from "react";
import StockDetails from "./stockDetails";
function StockEventsTable(props){
    const products = [{id:1, name:"dolo"},{id:2, name:"crocin"}]
    const stockEvents = [{id:1, type:"paracetamol",qty:"3"},{id:2, type:"paracetamol",qty:"10"}]
    console.log(products);
    return(
        
        <div className="StockEventTable">
            Number of products available: {products.length}
            {products.map((product,index)=>(
                    <div className="StockEventTable__productsContainer" key={index}>
                        <StockDetails
                            name={product.name}
                            total="20"
                            stockEvents={stockEvents}
                        />
                    </div>
            ))}
        </div>
    );
}

export default StockEventsTable;