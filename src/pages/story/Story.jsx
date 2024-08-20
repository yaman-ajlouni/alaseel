import React from 'react';
import './Story.scss';

export const Story = () => {
    return (
        <div className='story-out-container'>
            <div className='story-left-container'>
                <h2>About Us</h2>
                <p>
                    Welcome to our company! We are dedicated to providing the best services
                    to our customers. With years of experience in the industry, our team
                    of professionals is here to ensure your satisfaction. We believe in 
                    quality, integrity, and innovation, and we're always striving to 
                    exceed your expectations. Join us on our journey to success and 
                    discover what makes us different.
                </p>
            </div>
            {/* <div className='story-right-container'> */}
                <img src={require('../../assets/images/about-alaseel-background.jpg')} alt="Company Image" />
            {/* </div> */}
        </div>
    );
}
