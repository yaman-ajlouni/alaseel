import React from 'react'
import './RetailMenu.scss'
import { Link } from 'react-router-dom'

export const RetailMenu = () => {
    return (
        <div className='retail-menu-out-container'>
            <div className='retail-menu-top-container'>
                <div className='retail-menu-title'>
                    <div>Our Products</div>
                    <i>Enjoy the Best Food & Sweets. / Tel.: 9332</i>
                </div>

            </div>
            <div className='retail-menu-bottom-container'>
                <Link to='/food' className='retail-menu-food-container'>
                    <img src={require('../../assets/retailImages/food-icon-white.png')} alt="" />
                    <Link to='/food'>Al Aseel / Food</Link>
                </Link>
                <Link to='/sweets' className='retail-menu-sweets-container'>
                    <img src={require('../../assets/retailImages/sweet-icon-white.png')} alt="" />
                    <Link to='/sweets'>Al Aseel / Sweets</Link>
                </Link>
            </div>
        </div>
    )
}
