import React from 'react';
import './RetailIntro.scss';
import { ImageLoader } from '../../components/imageLoader/ImageLoader'; // Adjust the path if needed

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


// import React, { useEffect, useState } from 'react';
// import './RetailIntro.scss';
// import { ImageLoader } from '../../components/imageLoader/ImageLoader'; 

// export const RetailIntro = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const preventSave = (event) => {
//       event.preventDefault();
//     };

//     document.addEventListener('contextmenu', preventSave);
//     document.addEventListener('touchstart', preventSave);

//     return () => {
//       document.removeEventListener('contextmenu', preventSave);
//       document.removeEventListener('touchstart', preventSave);
//     };
//   }, []);

//   return (
//     <div className='retail-intro-out-container'>
//       <video
//           className={`video ${isLoading ? 'hidden' : 'visible'}`}
//           src={require('../../assets/menu.MP4')}
//           autoPlay
//           loop
//           muted
//           playsInline
//           controls={false}
//           onLoadedData={() => setIsLoading(false)} // Set loading to false when video data is loaded
//         />
//     </div>
//   );
// };

