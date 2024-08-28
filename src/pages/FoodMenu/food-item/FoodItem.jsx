import React, { useState } from 'react';
import './FoodItem.scss';

export const FoodItem = ({ imageSrc, arabicName, englishName, details }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='food-item-container'>
            <div className='food-item-content' onClick={toggleDetails}>
                <div className='food-item-image'>
                    <img src={imageSrc} alt={englishName} />
                </div>
                <div className='food-item-details-container'>
                    <div className='food-item-details-arabic'>{arabicName}</div>
                    <div className='food-item-details-english'>{englishName}</div>
                </div>
            </div>

            {isExpanded && (
                <div className='food-item-dropdown'>
                    <ul>
                        {details.map((detail, index) => (
                            <li key={index} className='detail-item'>
                                {/* <img src={detail.imageSrc} alt={detail.englishName} className='detail-image'/> */}
                                <div className='detail-text'>
                                    <div className='detail-arabic'>{detail.arabicName}</div>
                                    <div className='detail-english'>{detail.englishName}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
