import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import '../../assets/style/GalleryContainer.scss';
import { fetchHomeData } from '../../redux/actions/homeActions';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import Error from '../../components/error/Error';

const HomeSwiper = () => {
    const dispatch = useDispatch();
    const { data: images, loading, error } = useSelector((state) => state.home);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    if (loading) return <p><LoadingSpinner /></p>;
    if (error) return <p><Error /></p>;

    return (
        <div className='gallery-container'>
            <Swiper
                modules={[Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                breakpoints={{
                    420: { slidesPerView: 1 },
                    500: { slidesPerView: 2 },
                    700: { slidesPerView: 2 },
                    830: { slidesPerView: 3 },
                    1100: { slidesPerView: 4 },
                    1360: { slidesPerView: 5 }
                }}
            >
                {images?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className='gallery-card-container'>
                            <div className='gallery-card-img'>
                                <img
                                    src={image.image_url}
                                    alt={`home-swiper-${index + 1}`}
                                    className='loaded'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeSwiper;
