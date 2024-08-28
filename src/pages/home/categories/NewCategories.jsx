import React from 'react'
import './NewCategories.scss'
import { Link } from 'react-router-dom'

export const NewCategories = () => {
    return (
        <div className='new-categories-out-container'>
            <div className='new-about-out-container'>
                <Link className='new-about-card-container' to='/about'>
                    <img className='new-about-img' src={require('../../../assets/images/ConsultancyMain.jpg')} alt='About' />
                    <div className='new-about-card'>
                        <h3>About</h3>
                        <div>Welcome to our company! We are dedicated to providing the best services to our customers. With years of experience in the industry. Join us on our journey to success and discover what makes us different.</div>
                    </div>
                </Link>
            </div>
            <div className='new-retail-out-container'>
                <Link className='new-retail-card-container' to='/Retail'>
                    <img className='new-retail-img' src={require('../../../assets/images/RetailMain.jpg')} alt='Retail' />
                    <div className='new-retail-card'>
                        <h3>Menu</h3>
                        <div>Al Aseel's mouth-watering sweets and delighted products, available at our signature shops and point of sales, are packaged and presented in elegant boxes</div>
                    </div>
                </Link>
            </div>
            <div className='new-catering-out-container'>
                <Link className='new-catering-card-container' to='/Catering'>
                    <img className='new-catering-img' src={require('../../../assets/images/CateringMain.jpg')} alt='Catering' />
                    <div className='new-catering-card'>
                        <h3>Catering</h3>
                        <div>Al Aseel serves the very best quality catering for years at every imaginable kind of event creating artistic, elegant, and memorable dishes and sweets to be savored by both eye and palate.</div>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}
