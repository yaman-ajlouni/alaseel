import React from 'react';
import './CateringMenu.scss';

export const CateringMenu = () => {
  const cateringData = [
    {
      img: require('../../assets/catering-image/wedding.jpg'),
      title: 'Weddings Catering',
      description: 'Exquisite dishes and sweets tailored for your special day.',
    },
    {
      img: require('../../assets/catering-image/private.jpg'),
      title: 'Private Occasions',
      description: 'A diverse buffet perfect for intimate celebrations.',
    },
    {
      img: require('../../assets/catering-image/corporate.jpg'),
      title: 'Corporate Events Catering',
      description: 'Themed cocktail parties designed for networking and enjoyment.',
    },
    {
      img: require('../../assets/catering-image/buffet.jpg'),
      title: 'Buffet Catering',
      description: 'Artisanal dishes served buffet-style for a delightful experience.',
    },
    {
      img: require('../../assets/catering-image/dinner.jpg'),
      title: 'Plated Dinner Catering',
      description: 'Elegant plated meals for a refined dining experience.',
    },
    {
      img: require('../../assets/catering-image/cocktail.jpg'),
      title: 'Cocktail Party Catering',
      description: 'Refreshing drinks and appetizers to welcome your guests.',
    },
    {
      img: require('../../assets/catering-image/sweets.jpg'),
      title: 'Cakes',
      description: 'Beautifully crafted sweets that are perfect for any event.',
    },
    {
      img: require('../../assets/catering-image/social.jpg'),
      title: 'Social Event Catering',
      description: 'A variety of drinks and snacks ideal for casual gatherings.',
    },
  ];

  return (
    <div className="catering-menu-container">
      {/* <div className="catering-menu-header">
        <h2>Our Catering Services :</h2>
      </div> */}
      <div className="catering-cards">
        {cateringData.map((item, index) => (
          <div className="catering-card" key={index}>
            <div className="image-wrapper">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="text-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
