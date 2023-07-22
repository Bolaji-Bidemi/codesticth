import React from 'react'
import "./Item.css"
 import { useSelector } from 'react-redux'


const Item = () => {
   const items = useSelector(state => state.cart.item)
   let total = 0;

  if (items.length !== 0) {
    items.forEach((item) => {
      total += item.totalPrice;
    });
  }
  return (
   <div className="fill">
    {items.map((item) => (
       <div key={item.id} className="table-container">
      
       <table className="firstTable">
       <tbody>
           <tr>
             <th>Product</th>
             <td>
              {item.name}
             </td>
           </tr>
           <tr>
             <th>Price</th>
             <td>
               ${item.price}
             </td>
           </tr>
           <tr>
             <th>Qty</th>
             <td>
               {item.quantity}
             </td>
           </tr>
           <tr>
             <th>Total</th>
             <td>
               ${item.totalPrice}
             </td>
           </tr>
           </tbody>
       </table>
       
       </div>
    ))}
    <div className="total">
        Total: ${total}
       </div>
   </div>
  
  )
}

export default Item