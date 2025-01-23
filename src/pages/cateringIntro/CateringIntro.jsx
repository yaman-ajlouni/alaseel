import React from 'react';
import './Cateringintro.scss';
import { ImageLoader } from '../../components/imageLoader/ImageLoader'; // Adjust the path if needed

export const CateringIntro = () => {
  return (
    <div className='catering-intro-out-container'>
      <ImageLoader
        src={require('../../assets/images/catering-background-intro.gif')}
        alt="Catering Intro Background"
        className='background-image' // Optional class for additional styling
      />
    </div>
  );
};
