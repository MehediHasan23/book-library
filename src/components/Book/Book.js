import React from 'react';
import './Book.css'

const Book = (props) => {
  // console.log(props);
  const{name, Author, Category, img, price, publishedyear, stock} =props.book
  return (
    <div>

    <div className="card h-80 ">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body text-white">
        <h5 className="card-title">Name: {name}</h5>
        <p className="card-text">By: {Author}</p>
        <p className="card-text">Category: {Category}</p>
        <p className="card-text">Publish-Year: {publishedyear}</p>
        <p className="card-text">Price: {price}</p>
        <p className="card-text">stock: {stock}</p>
      </div>
      <div className="card-footer">
        <button onClick={()=> props.handelAddToCart(props.book)} className='btn btn-outline-secondary bg-white text-dark mb-2'>Add to cart</button>
      </div>
    </div>
  


    </div>
  );
};

export default Book;