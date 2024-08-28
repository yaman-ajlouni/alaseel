import React, { useState } from 'react';
import './SweetsItem.scss';

export const SweetsItem = ({ imageSrc, arabicName, englishName, details }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='sweets-item-container'>
            <div className='sweets-item-content' onClick={toggleDetails}>
                <div className='sweets-item-image'>
                    <img src={imageSrc} alt={englishName} />
                </div>
                <div className='sweets-item-details-container'>
                    <div className='sweets-item-details-arabic'>{arabicName}</div>
                    <div className='sweets-item-details-english'>{englishName}</div>
                </div>
            </div>

            {isExpanded && (
                <div className='sweets-item-dropdown'>
                    <ul>
                        {details.map((detail, index) => (
                            <li key={index} className='detail-item'>
                                <img src={detail.imageSrc} alt={detail.englishName} className='detail-image'/>
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
