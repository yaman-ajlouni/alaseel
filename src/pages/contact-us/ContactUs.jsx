import React from 'react'
import './ContactUs.scss'
import 'primeicons/primeicons.css';


export const ContactUs = () => {
    return (
        <div className='contact-out-container'>
            <div className='contact-title-container'>
                Contact Us
            </div>
            <div className='contact-details-container'>
                <div className='contact-first-container'>
                    <div className='contact-location-first'>
                        <div className='pi pi-map-marker '></div>
                        <div>offices</div>
                    </div>
                    <div className='contact-location-second'>
                        <div>Baghdad st ☏ 011 4441777</div>
                        <div>Almarjeh ☏	011 9332</div>
                    </div>
                </div>
                <div className='contact-second-container'>
                    <div className='contact-touch-first'>
                        <div className='pi pi-inbox'></div>
                        <div>Get in Touch</div>
                    </div>
                    <div className='contact-touch-second'>
                        <div>info@alaseelsweets.com</div>
                        <div>+963 94 4236661</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
