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
                    <a href='https://www.facebook.com/share/KqUrj5Hb3dBENN4B/?mibextid=LQQJ4d' target='blank' className='pi pi-facebook'></a>
                    <a href='https://www.instagram.com/alaseelsweets?igsh=bTJnOG8xanBoaWV4' target='blank' className='pi pi-instagram'></a>
                </div>
            </div>
            <div className='footer-bottom-container'>
                {/* <div  className='footer-produced-by'>Copyright © 2024 ALASEEL</div> */}
                {/* <div className='footer-produced-by'>
                    <div className='footer-produced-by-english'>Produced By Mazen & Housain Assad</div>
                    <div className='footer-produced-by-arabic'>انتاج شركة مازن وحسين أسعد</div> */}
                {/* </div> */}
                <div className='footer-details-container'>
                    <div>Damascus - Syria</div>
                    <div>TEL: +963 11 224 7760 - FAX: +963 11 2223399</div>
                    <div>MOB: +963 94 4236661 - E-MAIL: info@alaseelsweets.com</div>
                    <b>POWERED BY <a href="https://www.instagram.com/yaman_ajlouni/" target="_blank" rel="noopener noreferrer" >YAMAN AJLOUNI</a></b>
                </div>

            </div>
        </div>
    )
}
