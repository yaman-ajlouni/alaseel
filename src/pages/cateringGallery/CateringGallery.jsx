import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";
import { fetchCateringData } from '../../redux/actions/cateringActions';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import '../../assets/style/GalleryContainer.scss'
import Error from '../../components/error/Error';

export const CateringGallery = () => {
    const dispatch = useDispatch();
    const { data: images, loading, error } = useSelector((state) => state.catering);

    useEffect(() => {
        dispatch(fetchCateringData());
    }, [dispatch]);

    if (loading) return <p><LoadingSpinner /></p>;
    if (error) return <p><Error /></p>;

    return (
        <div className='gallery-container'>
            <div className='gallery-top-container'>
                {/* <h2>Our Gallery</h2> */}
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
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <ImageWithPlaceholder src={img.image_url} alt={`catering-gallery-${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

const ImageWithPlaceholder = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <div className='gallery-card-container'>
            <div className='gallery-card-img'>
                {!isLoaded && (
                    <div className='placeholder'>
                        <div className="spinner"></div>
                    </div>
                )}
                <img
                    src={src}
                    alt={alt}
                    style={{ display: isLoaded ? 'block' : 'none' }}
                    onLoad={() => setIsLoaded(true)}
                />
            </div>
        </div>
    );
};
