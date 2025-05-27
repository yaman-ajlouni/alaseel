import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";
import '../../assets/style/GalleryContainer.scss';
import img1 from '../../assets/catering/catering-swiper/catering-swiper1.jpg';
import img2 from '../../assets/catering/catering-swiper/catering-swiper2.jpg';
import img3 from '../../assets/catering/catering-swiper/catering-swiper3.jpg';
import img4 from '../../assets/catering/catering-swiper/catering-swiper4.jpg';
import img5 from '../../assets/catering/catering-swiper/catering-swiper5.jpg';
import img6 from '../../assets/catering/catering-swiper/catering-swiper6.jpg';
import img7 from '../../assets/catering/catering-swiper/catering-swiper7.jpg';
import img8 from '../../assets/catering/catering-swiper/catering-swiper8.jpg';


export const CateringGallery = () => {
    const images = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
        { img: img7 },
        { img: img8 },
    ];

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
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <ImageWithPlaceholder src={image.img} alt={`catering-gallery-${index + 1}`} />
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
