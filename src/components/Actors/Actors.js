import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import './Actors.css'

const Actors = () => {
  const [persons, setPersons] = useState([])
  useEffect(()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setPersons(data))
  },[])
  return (
    <div className='row'>
      
        <div className='col-8 person-details'> 
          {
            persons.map(person => <Actor
              key = {person.id}
              person={person}

              ></Actor>)
          }
        
        </div>
        <div className="col-3 details-info">
          <h3>Actor Added:</h3>
          <h3>total cost:</h3>
        </div>
      


    </div>
  );
};

export default Actors;