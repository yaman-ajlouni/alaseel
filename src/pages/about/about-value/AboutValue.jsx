import React, { useEffect, useState } from 'react';
import './AboutValue.scss';
import AOS from 'aos';


export const AboutValue = () => {

    useEffect(() => {
        AOS.init();
        return () => {
            
        };
    }, []);

    const [visibleDetails, setVisibleDetails] = useState(null);

    const toggleDetails = (title) => {
        setVisibleDetails(visibleDetails === title ? null : title);
    };

    return (
        <div  className='about-value-out-container'>
            <div className='about-value-main-container'>
                <div className='about-value-main-title'>
                    Our Values
                </div>
                <div className='about-value-main-details'>
                    Sharing meals and sweets, with family, friends and colleagues, is part of the real Syrian essence, habits and traditions, and is highly related to a variety of positive feelings such as pleasure, care and peace of mind. Consequently, our values at Diwan Al Muhanna are Derived from our Syrian Traditions that are enforced deep in our culture as an organization and a family.
                </div>
            </div>
            <div className='about-value-items'>
                <div className='value-item-container'>
                    <div className='value-title' onClick={() => toggleDetails('Product Safety')}>
                        Product Safety
                    </div>
                    {visibleDetails === 'Product Safety' && (
                        <div data-aos="flip-right" className='value-details'>
                            Al Aseel has taken and implemented serious steps towards making food safety a top priority in all its kitchens, plants, and stores. All staff members are highly qualified, regularly trained, and provided with the needed equipment to handle, prepare, store, and deliver food in the most hygienic ways. Similarly, all products are delicately handmade in-line with international hygiene and food safety standards. The company was granted the two main integrated quality and food safety management systems; ISO 9001 and ISO 22000 across all the stages of fabrication, packaging, and sales. The latest one, ISO 22000, includes the HACCP, Hazard Analysis Critical Control Point, which prevents unsafe practices and implements measurements to reduce them to a safe level.
                        </div>
                    )}
                </div>
                <div className='value-item-container'>
                    <div className='value-title' onClick={() => toggleDetails('Accountability')}>
                        Accountability
                    </div>
                    {visibleDetails === 'Accountability' && (
                        <div data-aos="flip-right" className='value-details'>
                            At Al Aseel, we take personal accountability for all our actions and end results and focus on enhancing customer’s trust and loyalty by making sure we stand up to our promises and commitments.
                        </div>
                    )}
                </div>
                <div className='value-item-container'>
                    <div className='value-title' onClick={() => toggleDetails('Healthy Work Environment')}>
                        Healthy Work Environment
                    </div>
                    {visibleDetails === 'Healthy Work Environment' && (
                        <div data-aos="flip-right" className='value-details'>
                            Al Aseel always tries to lead a healthy work environment through assuring friendly relationships with all employees by empowering them and enabling them to reach their highest potential. Similarly, we are keen on maintaining a lifetime partnership with our suppliers and clients based on trust and loyalty.
                        </div>
                    )}
                </div>
                <div className='value-item-container'>
                    <div className='value-title' onClick={() => toggleDetails('Community Well-Being')}>
                        Community Well-Being
                    </div>
                    {visibleDetails === 'Community Well-Being' && (
                        <div data-aos="flip-right" className='value-details'>
                            We look after the well-being of the community by always considering the socio-ecological consequences of our business activities through:
                            <li>
                                Rationalizing the use of resources such as water and energy
                            </li>
                            <li>
                                Implementing production waste management and recycling systems
                            </li>
                            <li>
                                Supporting and initiating charitable activities
                            </li>
                            <li>
                                Contributing to the social and cultural development of the community by creating awareness on how to adopt healthy food consumption behaviors and how to economize the resources.
                            </li>
                        </div>
                    )}
                </div>
                <div className='value-item-container'>
                    <div className='value-title' onClick={() => toggleDetails('Integrity')}>
                        Integrity
                    </div>
                    {visibleDetails === 'Integrity' && (
                        <div data-aos="flip-right" className='value-details'>
                            Integrity is our cornerstone for every step we take by relying on honesty and truthfulness in our product and service delivery and showing respect to all individuals.
                        </div>
                    )}
                </div>
                <div className='value-item-container'>
                    <div className='value-title' onClick={() => toggleDetails('Quality Assurance')}>
                        Quality Assurance
                    </div>
                    {visibleDetails === 'Quality Assurance' && (
                        <div data-aos="flip-right" className='value-details'>
                            Al Aseel’s main efforts lie in looking after its customers’ health and needs and guaranteeing the best product quality is always being delivered. We believe the brand’s legacy is mirrored by the community’s well-being and customer satisfaction; both highly related to the quality standards we provide to our customers. The key element in maintaining Al Aseel’s high product quality starts from the most fundamental aspect; picking the finest raw material available. Then comes the production process; supported by highly trained food professionals and constantly updated quality management systems. Finally, we work on enhancing the aesthetic appeal of our food and sweet offerings through elegant packaging and food presentation.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
