import React from 'react'
import './ConsultancyCard.scss'
import { Link } from 'react-router-dom'


export const ConsultancyCard = () => {
    return (
        <Link className='consultancy-card-container' to='/Consultancy'>
            <img className='consultancy-img' src={require('../../../assets/images/ConsultancyMain.jpg')} alt='Catering' />
            <div className='consultancy-card'>
                <h3>Consultancy</h3>
                <div>When you have an idea to start your food business you need a specialized company to bring this idea alive. Here comes Al Aseel.</div>
            </div>
        </Link>
    )
}
