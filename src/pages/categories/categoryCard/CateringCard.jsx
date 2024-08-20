import React from 'react'
import './CateringCard.scss'
import { Link } from 'react-router-dom'


export const CateringCard = () => {
    return (
        <Link className='catering-card-container' to='/Catering'>
            <img className='catering-img' src={require('../../../assets/images/CateringMain.jpg')} alt='Catering' />
            <div className='catering-card'>
                <h3>Catering</h3>
                <div>Al Aseel serves the very best quality catering for years at every imaginable kind of event creating artistic, elegant, and memorable dishes and sweets to be savored by both eye and palate.</div>
            </div>
        </Link>
    )
}
