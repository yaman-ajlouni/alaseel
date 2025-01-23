import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CatContact.scss';

export const CatContact = () => {
  return (
    <div className='cat-contact-container'>
      {/* Top Divider */}
      <div className='top-divider'></div>

      {/* Image with Text Overlay */}
      <div className='cat-contact-image-container'>
        <div className='contact-text'>
          <h2>ADVICE ABOUT THE POSSIBILITIES?</h2>
          <p>Please contact us, we will be happy to help you.</p>
        </div>
        <div className='cat-contact-contact-button-container'>
          <Link to="/Contact"> {/* Add the 'to' prop with the desired route */}
            <button className=''>Contact Us</button>
          </Link>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className='bottom-divider'></div>
    </div>
  );
};
