import React from 'react';
import './LoadingSpinner.scss'; // Make sure to create a corresponding CSS file for styles

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <div className="spinner"></div>
        </div>
    );
};

export default LoadingSpinner;
