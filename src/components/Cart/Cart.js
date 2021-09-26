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
        <h4>Product added: {cart.length} </h4>
        <h5>total cost:{total}</h5>
        {
          cart.map(name=> <p>name added: {name.name}</p>)
        }
      </div>
      
  
    </div>
  );
};

export default Cart;