import React, {useState} from 'react';
import CartItem from './CartItem';
import './Cart.css'

function Cart({initialItems}){

const [items, setItems] = useState(initialItems)

const updateQty = (id, newQty) =>{
  const newItems = items.map(item => {
    if(item.id === id){
      return {...item, qty: newQty}
  } 
  return item; 
});
setItems(newItems);
}
  

  const grandTotal = items.reduce((total, item) => (
    
    total + (item.qty * item.price))
    ,0).toFixed(2)


  return(
    <div className='Cart'>
      <h1 className= 'Cart__header'> Shopping Cart</h1>
      <hr className= 'Cart__line'/>
      <div>
        {items.map(item => (
          <CartItem key= {item.id} updateQty= {updateQty} {...item} /> 
        ))}
      </div>

      <h3>Grand Total: ${grandTotal} </h3>

     
    </div>
  )
}


export default Cart;
