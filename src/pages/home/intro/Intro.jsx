import React, { useState, useEffect } from 'react';
import './Intro.scss';
import { ImageLoader } from '../../../components/loader/ImageLoader';

export const Intro = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preventSave = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', preventSave);
    document.addEventListener('touchstart', preventSave);

    return () => {
      document.removeEventListener('contextmenu', preventSave);
      document.removeEventListener('touchstart', preventSave);
    };
  }, []);

  return (
    <div className='intro-out-container'>
      <div className='intro-details-container'>
        {isLoading && <ImageLoader src='' alt='video placeholder' className='video-placeholder' />}
        <video
          className={`video ${isLoading ? 'hidden' : 'visible'}`}
          src={require('../../../assets/IMG_0816.MP4')}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          onLoadedData={() => setIsLoading(false)} // Set loading to false when video data is loaded
        >
        </video>
      </div>
    </div>
  );
};
