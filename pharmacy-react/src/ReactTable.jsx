import React, { Component } from 'react'
class ReactTable extends Component {
    state = {  } 
    render() { 
        return(<table>
            <tr>
                <th>S.no </th>
                <th>Tablet name </th>
                <th>Product Id </th>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                <th>Cost </th>
                <th>Manufacturer </th>
            </tr>
            <tr>
                <td>1</td>
                <td>Crocin</td>
                <td>20</td>
                <td>Rs.40</td>
                <td>Dharma Pharmacy</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Dolo</td>
                <td>12</td>
                <td>Rs.25</td>
                <td>ST Pharmacy</td>
            </tr>
        </table>);
      }  
    }  
   
 
export default ReactTable;