import React, { useState } from 'react';
import './ImageLoader.scss';

export const ImageLoader = ({ src, alt, className }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className={`image-loader-wrapper ${className}`}>
            {loading && (
                <div className="placeholder">
                    <div className="spinner" />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={`image ${loading ? 'hidden' : ''}`}
                onLoad={() => setLoading(false)}
                onError={() => setLoading(false)}
            />
        </div>
    );
};
