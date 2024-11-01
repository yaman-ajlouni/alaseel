import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import '../../assets/style/GalleryContainer.scss';
import { fetchMenuData } from '../../redux/actions/menuActions';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import Error from '../../components/error/Error';

export const RetailGallery = () => {
    const dispatch = useDispatch();
    const { data: images, loading, error } = useSelector((state) => state.menu);

    useEffect(() => {
        dispatch(fetchMenuData());
    }, [dispatch]);

    if (loading) return <p><LoadingSpinner /></p>;
    if (error) return <p><Error /></p>;

    return (
        <div className='gallery-container'>
            <div className='gallery-top-container'>
                {/* Our Gallery */}
            </div>
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
                                        alt={`retail-gallery-${index + 1}`}
                                        className='loaded'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default RetailGallery;
