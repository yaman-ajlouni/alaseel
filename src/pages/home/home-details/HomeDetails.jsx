import React, { useEffect } from 'react'
import './HomeDetails.scss'
import Aos from 'aos';


export const HomeDetails = () => {

    useEffect(() => {
        Aos.init();
        return () => {
            
        };
    }, []);

    return (
        <div data-aos="fade-right" className='home-details-out-container'>
            <div className='home-details-top-container'>
                <img src={require('../../../assets/images/logo-english.png')} alt="" />
                <div>
                    FOR FOOD & SWEETS
                </div>
            </div>
            <div className='home-details-bottom-container'>
                <div>The trust that we have acquired throughout years</div>
                <div> have made us coperate hand by hand to present to our </div>
                <div>customers in Arab and foreign countries this original taste</div>
                 from the original SWEETS - AL ASEEL SWEETS
            </div>
        </div>
    )
}
