import React from 'react'
import './RetailGallery.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay, FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

export const RetailGallery = () => {

    const images = [
        require('../../assets/catering-image/catering-gallery1.jpg'),
        require('../../assets/catering-image/catering-gallery2.jpg'),
        require('../../assets/catering-image/catering-gallery3.jpg'),
        require('../../assets/catering-image/catering-gallery4.jpg'),
        require('../../assets/catering-image/catering-gallery5.jpg'),
        require('../../assets/catering-image/catering-gallery6.jpg'),
        require('../../assets/catering-image/catering-gallery7.jpg'),
        require('../../assets/catering-image/catering-gallery8.jpg'),
    ];

    return (
        <div className='retail-gallery-out-container'>
            <div className='retail-gallery-top-container'>
                {/* Our Gallery */}
            </div>
            <div className='retail-gallery-bottom-container'>
                <div className='retail-gallery-out-container'>
                    <Swiper
                        modules={[Autoplay]}
                        // spaceBetween={30}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop
                        breakpoints={{
                            420: {
                                slidesPerView: 1
                            },
                            500: {
                                slidesPerView: 2
                            },
                            700: {
                                slidesPerView: 2
                            },
                            830: {
                                slidesPerView: 3
                            },
                            1100: {
                                slidesPerView: 4
                            },
                            1360: {
                                slidesPerView: 5
                            }
                        }}
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className='retail-gallery-card-out-container'>
                                    <div className='retail-gallery-card-img'>
                                        <img src={img} alt={`retail-gallery-${index + 1}`} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
