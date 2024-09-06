import React from 'react';
import './CateringMenu.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export const CateringMenu = () => {
  const cateringData = [
    {
      img: require('../../assets/catering-image/Coffee-Break.jpg'),
      title: 'Western Sweet',
      description: 'Delicious western sweets for your perfect event.',
    },
    {
      img: require('../../assets/catering-image/buffet.jpg'),
      title: 'Lunch Buffet',
      description: 'A variety of options served in a buffet style for lunch.',
    },
    {
      img: require('../../assets/catering-image/CocktailParty.jpg'),
      title: 'Party',
      description: 'Enjoy our well-organized cocktail parties with themed catering.',
    },
    {
      img: require('../../assets/catering-image/LiveStation.jpg'),
      title: 'Live Stations',
      description: 'Watch the food being prepared live in front of you.',
    },
    {
      img: require('../../assets/catering-image/seated-dinner.jpg'),
      title: 'Seated Dinner',
      description: 'A more formal dinner experience with plated meals.',
    },
    {
      img: require('../../assets/catering-image/diet-section.jpg'),
      title: 'Welcome Drink',
      description: 'Fresh drinks to welcome your guests.',
    },
  ];

  return (
    <div className="catering-menu-container">
      <div className="catering-menu-header">
        <h1>Catering Menu</h1>
        <i>A brief description about what our catering menu offers.</i>
      </div>
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="catering-swiper"
      >
        {cateringData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-content">
              <div className="image-wrapper">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="text-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
