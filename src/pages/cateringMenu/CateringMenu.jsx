import React from 'react';
import './CateringMenu.scss';

export const CateringMenu = () => {
    const cateringData = [
        {
            img: require('../../assets/catering-image/Coffee-Break.jpg'),
            title: 'Western sweet'
        },
        {
            img: require('../../assets/catering-image/buffet.jpg'),
            title: 'Lunch Buffet'
        },
        {
            img: require('../../assets/catering-image/CocktailParty.jpg'),
            title: 'Party'
        },
        {
            img: require('../../assets/catering-image/LiveStation.jpg'),
            title: 'Live Stations'
        },
        {
            img: require('../../assets/catering-image/seated-dinner.jpg'),
            title: 'Seated Dinner'
        },
        {
            img: require('../../assets/catering-image/diet-section.jpg'),
            title: 'Welcome Drink'
        }
    ];

    return (
        <div className='catering-menu-out-container'>
            <div className='catering-menu-title-container'>
                <h2>Our Menu</h2>
                <i>Here are some services we provide in our catering.</i>
            </div>
            <div className='catering-menu-card-out-container'>
                {cateringData.map((item, index) => (
                    <div className='catering-menu-card-container' key={index}>
                        <div className='catering-menu-card-image'>
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className='catering-menu-card-title'>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
