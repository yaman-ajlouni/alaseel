import React from 'react';
import './RetailIntro.scss';
import { ImageLoader } from '../../components/loader/ImageLoader'; // Adjust the path if needed

export const RetailIntro = () => {
  return (
    <div className='retail-intro-out-container'>
      <ImageLoader
        src={require('../../assets/retailImages/retail-background-intro.jpg')}
        alt="Retail Intro Background"
        className='background-image' // Optional class for additional styling
      />
    </div>
  );
};
