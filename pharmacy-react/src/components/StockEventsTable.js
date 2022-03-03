import React from "react";
import stockDetails from './stockDetails'
function StockEventsTable(props){
    const{products, stockEvents} = props
    return(
        
        <div className="StockEventTable">
            {products.map(product=>{
                const relevantStockEvents = stockEvents.filter(se=> se.product.id === product.id)
                const stockTotal = relevantStockEvents.reduce((accumulator, currentElement)=>{
                    return accumulator = currentElement.qty;
                },0);
                return(
                    <div className="StockEventTable__productsContainer">
                        <stockDetails
                            name={product.name}
                            total={stockTotal}
                            stockEvents={relevantStockEvents}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default StockEventsTable;