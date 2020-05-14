import React from 'react';
import CartItem from './CartItem';

function Cart({initialItems}){
  return(
    <div className='Cart'>
      <h1> Shopping Cart</h1>
      <hr/>
      <div>
        {initialItems.map(item => (
          <CartItem {...item}
          /> 
        ))}
      </div>

     
    </div>
  )
}


export default Cart;
