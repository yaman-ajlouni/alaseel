import React from 'react';
import { Link } from 'react-router-dom';
import './CatContact.scss';

export const CatContact = () => {
  return (
    <div className='cat-contact-container'>
      <div className='top-divider'></div>

      <div className='cat-contact-image-container'>
        <div className='contact-text'>
          <h2>ADVICE ABOUT THE POSSIBILITIES?</h2>
          <p>Please contact us, we will be happy to help you.</p>
        </div>
        <div className='cat-contact-contact-button-container'>
          <Link to="/Contact">
            <button className=''>Contact Us</button>
          </Link>
        </div>
      </div>

      <div className='bottom-divider'></div>
    </div>
  );
};
