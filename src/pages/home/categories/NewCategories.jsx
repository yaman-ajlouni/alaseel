import React from 'react';
import './NewCategories.scss';
import { Link } from 'react-router-dom';
import { ImageLoader } from '../../../components/loader/ImageLoader'; // Adjust the path if needed

export const NewCategories = () => {
    return (
        <div className='new-categories-out-container'>
            <div className='new-about-out-container'>
                <Link className='new-about-card-container' to='/About'>
                    <ImageLoader
                        src={require('../../../assets/images/ConsultancyMain.jpg')}
                        alt='About'
                        className='new-about-img'
                    />
                    <div className='new-about-card'>
                        <h3>About</h3>
                        <div>Welcome to our company! We are dedicated to providing the best services to our customers. With years of experience in the industry. Join us on our journey to success and discover what makes us different.</div>
                    </div>
                </Link>
            </div>
            <div className='new-retail-out-container'>
                <Link className='new-retail-card-container' to='/Retail'>
                    <ImageLoader
                        src={require('../../../assets/images/RetailMain.jpg')}
                        alt='Retail'
                        className='new-retail-img'
                    />
                    <div className='new-retail-card'>
                        <h3>Menu</h3>
                        <div>Al Aseel's mouth-watering sweets and delighted products, available at our signature shops and point of sales, are packaged and presented in elegant boxes.</div>
                    </div>
                </Link>
            </div>
            <div className='new-catering-out-container'>
                <Link className='new-catering-card-container' to='/Catering'>
                    <ImageLoader
                        src={require('../../../assets/images/CateringMain.jpg')}
                        alt='Catering'
                        className='new-catering-img'
                    />
                    <div className='new-catering-card'>
                        <h3>Catering</h3>
                        <div>Al Aseel serves the very best quality catering for years at every imaginable kind of event creating artistic, elegant, and memorable dishes and sweets to be savored by both eye and palate.</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};
