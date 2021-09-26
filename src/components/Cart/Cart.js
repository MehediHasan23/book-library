import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const {cart} = props;
  let total = 0;
  
  for(const product of cart){
    total = total + product.price;
    
  }
  
  return (
    <div className='cart'>
      <div className='cart-details '>
        <h4>Product Added: {cart.length} </h4>
        <h5>Total cost:${total}</h5>
        <hr />
        {
          cart.map(name=> <li>{name.name}</li>)
        }
      </div>
      
  
    </div>
  );
};

export default Cart;