import React from 'react';
import './Actor.css'

const Actor = (props) => {
  console.log(props);
  const {name, age, bestMovie, born, height, images, rating, salary} = props.person
  return (
    <div>
      
    
    <div className="card h-80 ">
      <img src={images} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Name: {name}</h5>
        <p className="card-text">Born: {born}</p>
        <p className="card-text">Age: {age}</p>
        <p className="card-text">Salary: {salary}</p>
        <p className="card-text">Best-Movie: {bestMovie}</p>
        <p className="card-text">Rating: {rating}</p>
      </div>
      <div className="card-footer">
        <button className='btn btn-outline-secondary bg-white text-dark mb-2'>Add to cart</button>
      </div>
    </div>
  

    </div>
  );
};

export default Actor;