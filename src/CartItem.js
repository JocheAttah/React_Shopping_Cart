import React from "react";
import './CartItem.css';

function CartItem({ id, name, price, qty, updateQty }) {
  const addone = () => updateQty(id, qty + 1);
  const subone = () => updateQty(id, qty - 1);

  return (
    <div className="CartItem">
        <div>{name}</div>
        <div>{price}</div>
        <div>
          <button onClick={subone} disabled={qty <= 0}>-</button>
          {qty}
          <button onClick={addone}>+</button>
        </div>
        <div>${qty * price}</div>
      
    </div>
  );
}

export default CartItem;
