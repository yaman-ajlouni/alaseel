import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "../../assets/style/GalleryContainer.scss";
import img1 from '../../assets/catering-image/buffet.jpg'; 
import img2 from '../../assets/catering-image/cocktail.jpg';
import img3 from '../../assets/catering-image/corporate.jpg'; 
import img4 from '../../assets/catering-image/dinner.jpg'; 
import img5 from '../../assets/catering-image/private.jpg'; 
import img6 from '../../assets/catering-image/social.jpg'; 
import img7 from '../../assets/catering-image/sweets.jpg'; 
import img8 from '../../assets/catering-image/wedding.jpg'; 


const HomeSwiper = () => {
  const images = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
];


  return (
    <div className="gallery-container">
      <Swiper
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          420: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          700: { slidesPerView: 2 },
          830: { slidesPerView: 3 },
          1100: { slidesPerView: 4 },
          1360: { slidesPerView: 5 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="gallery-card-container">
              <div className="gallery-card-img">
                <img
                  src={image.img}
                  alt={`home-swiper-${index + 1}`}
                  className="loaded"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
