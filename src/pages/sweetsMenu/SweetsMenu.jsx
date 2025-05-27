import React, { useEffect, useState } from 'react'
import { NavBar } from '../../components/navbar/NavBar'
import { SweetsItem } from './sweets-item/SweetsItem';
import './SweetsMenu.scss'
import { Footer } from '../../components/footer/Footer';

export const SweetsMenu = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const sweetsItem = [
        {
            imageSrc: require('../../assets/sweetsImages/arabic.jpg'),
            arabicName: 'حلويات عربية',
            englishName: 'ARABIC SWEETS',
            details: [
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'مبرومة', englishName: 'Mabruma' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'اصابع صنوبر', englishName: 'Pine Fingers' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'أسية', englishName: 'Exponential' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'عش صنوبر', englishName: 'Pine Nest' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'بللورية', englishName: 'Crystalline' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'بقلاوة جوز', englishName: 'Walnut Baklava' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'اصابع كاجو', englishName: 'Cashew Fingers' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'بقلاوة تركية', englishName: 'Turkish Baklava' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'عش بلبل فستق', englishName: 'Osh Bulbul Pistachio' },
            ]
        },
        {
            imageSrc: require('../../assets/sweetsImages/sweet2.jpg'),
            arabicName: 'معمول محشي',
            englishName: 'STUFFED MAAMOUL',
            details: [
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'معمول فستق', englishName: 'Pistachio Maamoul' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'تويتات جوز', englishName: 'Walnut Maamoul' },
            ]
        },
        {
            imageSrc: require('../../assets/sweetsImages/dry.jpg'),
            arabicName: 'حلويات نواشف',
            englishName: 'NAWASHIF SWEETS ',
            details: [
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'برازق', englishName: 'Barazek' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'برازق كبيرة', englishName: 'Barazek Large Size' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'عجوة', englishName: 'Ajwa' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'عجوة كبيرة', englishName: 'Ajwa Large Size' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'غريبة', englishName: 'Ghoriba' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'غريبة كبيرة', englishName: 'Ghoriba Large Size' },
            ]
        },
        {
            imageSrc: require('../../assets/sweetsImages/fruits.jpg'),
            arabicName: 'محشي فواكه',
            englishName: 'FRUIT STUFFED',
            details: [
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'مممول نارنج', englishName: 'Maamoul Naranj' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'معمول فريز', englishName: 'Strawberry Maamoul' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'معمول راحة', englishName: 'Delight Maamoul' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'معمول مشمش', englishName: 'Apricot Maamoul' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'معمول ورد', englishName: 'Ward Maamoul' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'معمول توت شامي', englishName: 'Shami Berry Maamoul' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'معمول جوز هند', englishName: 'Coconut Maamoul' },
            ]
        },
        {
            imageSrc: require('../../assets/sweetsImages/special.jpg'),
            arabicName: 'مميزات عربية',
            englishName: 'ARABIC SPECIALS',
            details: [
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'بقج فستق', englishName: 'Baguette with Pistachio' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'تمرية مكسرات', englishName: 'Tamriya Nuts' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'هريسة لوز', englishName: 'Almond Mush' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'هريسة فستق', englishName: 'Harissa with Pistachio' },
                { imageSrc: require('../../assets/sweetsImages/sweets1.jpg'), arabicName: 'أسور الست', englishName: 'Walls of the Sitt' },
            ]
        },
    ]


    const [loadedImages, setLoadedImages] = useState(Array(sweetsItem.length).fill(false));

    const handleImageLoad = (index) => {
        const updatedLoadedImages = [...loadedImages];
        updatedLoadedImages[index] = true;
        setLoadedImages(updatedLoadedImages);
    };


    return (
        <div>
            <NavBar />
            <div className='sweets-menu-out-container'>
                <div className='sweets-menu-main-title'>
                    <div className='sweets-menu-english-title'>SWEETS MENU</div>
                    <div className='sweets-menu-arabic-title'>قائمة الحلويات</div>
                </div>
                <div className='sweets-menu-main-container'>
                    {sweetsItem.map((item, index) => (
                        <SweetsItem
                            key={index}
                            imageSrc={item.imageSrc}
                            arabicName={item.arabicName}
                            englishName={item.englishName}
                            details={item.details}
                            isLoaded={loadedImages[index]}
                            onLoad={() => handleImageLoad(index)}
                        />
                    ))}
                </div>
            </div>
            <div className='sweets-menu-footer-out-container'>
                <div className='sweets-menu-footer-title'>
                    PRODUCED BY MAZEN & HOUSAIN ASSAD
                </div>
                <div className='sweets-menu-footer-details'>
                    THE TRUST THAT WE HAVE ACQUIRED THROUGHOUT
                    YEARS HAVE MADE US COOPERATE HAND BY HAND
                    TO PRESENT TO OUR CUSTOMERS IN ARAB
                    AND FOREIGN COUNTRIES THIS ORIGINAL TASTE
                    FROM THE ORIGINAL FOODS & SWEETS.
                </div>
            </div>
            <Footer />
        </div>
    );
}
