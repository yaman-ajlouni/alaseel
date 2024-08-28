import React, { useEffect } from 'react'
import './HomeAbout.scss'
import AOS from 'aos';

export const HomeAbout = () => {
    
    useEffect(() => {
        AOS.init();
        return () => {
            
        };
    }, []);

    return (
        <div data-aos="fade-right" className='home-about-out-container'>
            <div className='home-about-left-container'>
                <div className='home-about-journey-title'>Our Journey </div>
                <div className='home-about-journey-details'>Our family has been producing Syrian delicacies since 1973, making our factory one of the oldest Levantine sweet production lines in the region. Generation after generation, the family has strived to offer Muhanna’s customers the most delicious products, taking pride in the family heritage and experience in producing the best damascene sweets and delivering exceptional catering services. In 1996, we decided to continue our family legacy and established Al Muhanna Company for Sweets and Catering. A decade later, in 2007, decided to rejuvenate the brand and give it a more modern and trendy look with the launch of Diwan Al Muhanna identity. To cater the growing market demand and expand further in the region, Diwan Al Muhanna, in 2010, became part of the Syrian corporation; Meera Al Sham.</div>
            </div>
            <div className='home-about-right-container'>

            </div>
        </div>
    )
}
