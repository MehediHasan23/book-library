import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
  const [books, setBooks] = useState([])
  const[cart, setCart] = useState([])
  useEffect(()=>{
    fetch('./newdata.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  },[])

  const handelAddToCart =(product)=>{
    setCart([...cart, product])
  }

  return (
    <div className='row'>
      
      <div className='col-8 books-details'> 
        
       
        {
          books.map(book => <Book
            key={book.id}
             book ={book}
             handelAddToCart={handelAddToCart}
             ></Book>)
        }
       
        
        </div>
        
      <div className="col-3 details-info mt-5 text-center">
          <Cart cart ={cart}> </Cart>
      </div>


    </div>

  );
};

export default Shop;