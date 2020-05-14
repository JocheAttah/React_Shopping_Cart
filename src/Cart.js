import React from 'react';
import CartItem from './CartItem';

function Cart({initialItems}){
  
  const grandTotal = initialItems.reduce((total, item) => (
    
    total + (item.qty * item.price))
    ,0).toFixed(2)


  return(
    <div className='Cart'>
      <h1> Shopping Cart</h1>
      <hr/>
      <div>
        {initialItems.map(item => (
          <CartItem key= {item.iid} {...item} /> 
        ))}
      </div>

      <h3>Grand Total: ${grandTotal} </h3>

     
    </div>
  )
}


export default Cart;
