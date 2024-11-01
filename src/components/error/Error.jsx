// src/components/ErrorComponent.js
import React from 'react';
import './Error.scss';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = ({ message = "Something went wrong.", onRetry }) => {
    return (
        <div className="error-container">
            <FaExclamationTriangle className="error-icon" />
            <p className="error-message">{message}</p>
            {onRetry && (
                <button className="retry-button" onClick={onRetry}>
                    Retry
                </button>
            )}
        </div>
    );
};

export default Error;
