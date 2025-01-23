import React, { useState } from 'react';
import './ImageLoader.scss';

export const ImageLoader = ({ src, alt, className }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className={`image-loader-wrapper ${className}`}>
            <div className={`placeholder ${loading ? '' : 'hidden'}`}></div>
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
