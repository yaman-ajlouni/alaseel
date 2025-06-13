import { useEffect } from 'react'
import './AboutVision.scss'
import AOS from 'aos';

export const AboutVision = () => {

    useEffect(() => {
        AOS.init();
        return () => {
            
        };
    }, []);

    return (
        <div data-aos="flip-right" className='about-vision-out-container'>
            <div className='vision-out-container'>
                <div className='vision-title'>
                    Vision
                </div>
                <div className='vision-details'>
                    Handling softly a family business torch setting the latest systems and standard operation procedures to be one of the main economic pillars in the food industry.
                </div>
            </div>
            <div className='mission-out-container'>
                <div className='mission-title'>
                    Mission
                </div>
                <div className='mission-details'>
                    Handling softly a family business torch setting the latest systems and standard operation procedures to be one of the main economic pillars in the food industry.
                </div>
            </div>
        </div>
    )
}
