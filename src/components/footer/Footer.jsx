import React from 'react'
import './Footer.scss'
import 'primeicons/primeicons.css';


export const Footer = () => {
    return (
        <div className='footer-out-container'>
            <div className='footer-top-container'>
                <img className='footer-logo' src={require('../../assets/images/white-second-logo.PNG')} alt="ALASSEL Logo" />
                {/* <div className='footer-social-container'><SocialMedia /></div> */}
                <div className='footer-social-container'>
                    <a href='https://www.facebook.com/checkpoint/?next=https%3A%2F%2Fwww.facebook.com%2Fluckyshrubtest%2F' target='blank' className='pi pi-facebook'></a>
                    <a href='https://www.instagram.com/' target='blank' className='pi pi-instagram'></a>
                </div>
            </div>
            <div className='footer-bottom-container'>
                <div  className='footer-copy-right'>Copyright © 2024 ALASEEL</div>
                <div className='footer-powered-by'>Powered by Yaman Ajlouni</div>
            </div>
        </div>
    )
}
