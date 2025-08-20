import React from 'react';
import './Cateringintro.scss';
import { ImageLoader } from '../../components/imageLoader/ImageLoader';

export const CateringIntro = () => {
  return (
    <div className='catering-intro-out-container'>
      <ImageLoader
        src={require('../../assets/images/catering-background-intro.jpg')}
        alt="Catering Intro Background"
        className='background-image'
      />
    </div>
  );
};
