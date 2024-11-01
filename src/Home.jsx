import React, { useEffect } from 'react'
import { Footer } from './components/footer/Footer'
import { HomeDetails } from './pages/home/home-details/HomeDetails'
import { HomeNavBar } from './components/home-navbar/HomeNavBar'
import { Intro } from './pages/home/intro/Intro'
import { NewCategories } from './pages/home/categories/NewCategories'
import HomeSwiper from './pages/homeSwiper/HomeSwiper'

export const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HomeNavBar />
            <Intro />
            {/* <Categories /> */}
            <NewCategories />
            <HomeDetails />
            {/* <Story /> */}
            {/* <Logo /> */}
            {/* <Products /> */}
            <HomeSwiper />
            <Footer />
        </>
    )
}
