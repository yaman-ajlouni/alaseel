import React, { useEffect } from 'react';
import './Intro.scss';
// import Aos from 'aos';

export const Intro = () => {

//   useEffect(() => {
//     Aos.init();
//     return () => {
        
//     };
// }, []);
  
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
        <video  className='video' 
          src={require('../../../assets/IMG_0816.MP4')}
          autoPlay
          loop
          muted
          playsInline
          controls={false} // Disable video controls
        >
        </video>
      </div>
    </div>
  );
};
