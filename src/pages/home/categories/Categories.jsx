import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs, Virtual } from "swiper/modules";

import './Categories.scss';
import { RetailCard } from './categoryCard/RetailCard';
import { CateringCard } from './categoryCard/CateringCard';
import { ConsultancyCard } from './categoryCard/ConsultancyCard';

export const Categories = () => {

    const [thumbsSwiper] = useState(null);

    return (
        <div className='categories-out-container'>
            <Swiper 
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, FreeMode, Navigation, Thumbs, Pagination, Virtual]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                autoplay={true}
            >
                <SwiperSlide>
                    <RetailCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CateringCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ConsultancyCard />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
