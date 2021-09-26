import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const bookIcon = <FontAwesomeIcon icon={faBook} />
  return (
    <div className='header text-center text-white p-1'>
      <h1>LIBRARY <span className='text-warning'>{bookIcon}</span></h1>
      <q className='fs-4'>A room without books is like a body without a soul</q>
      <h2>Budget: 50k</h2>
    </div>
  );
};

export default Header;