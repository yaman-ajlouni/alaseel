import './NewCategories.scss';
import { Link } from 'react-router-dom';
import about from '../../../assets/home/home-about.jpg'
import menu from '../../../assets/home/home-menu.jpg'
import catering from '../../../assets/home/home-catering.jpg'

export const NewCategories = () => {
    return (
        <div className='new-categories-out-container'>
            {/* <div className='elegant-header'>
                <div className='header-line'></div>
                <h2 className='header-title'>Experience Excellence</h2>
                <p className='header-subtitle'>Discover our world of refined taste and impeccable service</p>
                <div className='header-line'></div>
            </div> */}
            
            <div className='categories-wrapper'>
                <Link className='elegant-category-card' to='/About'>
                    <div className='card-inner'>
                        <div className='image-section'>
                            <img src={about} alt='About' className='category-image' />
                            <div className='image-overlay'></div>
                            {/* <div className='card-number'>I</div> */}
                        </div>
                        <div className='content-section'>
                            <div className='content-wrapper'>
                                <h3 className='category-title'>Our Story</h3>
                                <div className='title-underline'></div>
                                <p className='category-description'>
                                    Welcome to our distinguished establishment, where tradition meets innovation. 
                                    With years of dedication to excellence, we have crafted an experience that 
                                    transcends expectations. Our journey is one of passion, precision, and 
                                    unwavering commitment to quality.
                                </p>
                                {/* <div className='cta-section'>
                                    <span className='elegant-cta'>Discover More</span>
                                    <div className='cta-line'></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </Link>

                <Link className='elegant-category-card reverse' to='/Retail'>
                    <div className='card-inner'>
                        <div className='image-section'>
                            <img src={menu} alt='Menu' className='category-image' />
                            <div className='image-overlay'></div>
                            {/* <div className='card-number'>II</div> */}
                        </div>
                        <div className='content-section'>
                            <div className='content-wrapper'>
                                <h3 className='category-title'>Menu</h3>
                                <div className='title-underline'></div>
                                <p className='category-description'>
                                    Al Aseel presents a curated selection of mouth-watering delicacies and 
                                    artisanal sweets. Each creation is meticulously crafted and elegantly 
                                    presented in our signature packaging, ensuring an unforgettable experience 
                                    from the first glance to the final taste.
                                </p>
                                {/* <div className='cta-section'>
                                    <span className='elegant-cta'>View Collection</span>
                                    <div className='cta-line'></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </Link>

                <Link className='elegant-category-card' to='/Catering'>
                    <div className='card-inner'>
                        <div className='image-section'>
                            <img src={catering} alt='Catering' className='category-image' />
                            <div className='image-overlay'></div>
                            {/* <div className='card-number'>III</div> */}
                        </div>
                        <div className='content-section'>
                            <div className='content-wrapper'>
                                <h3 className='category-title'>Catering</h3>
                                <div className='title-underline'></div>
                                <p className='category-description'>
                                    Al Aseel's catering excellence transforms your special moments into 
                                    extraordinary memories. Our culinary artisans create sophisticated dishes 
                                    and exquisite sweets that delight both the palate and the eye, ensuring 
                                    your event is nothing short of perfection.
                                </p>
                                {/* <div className='cta-section'>
                                    <span className='elegant-cta'>Begin Your Journey</span>
                                    <div className='cta-line'></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            
            <div className='elegant-footer'>
                <div className='decorative-element'></div>
            </div>
        </div>
    );
};