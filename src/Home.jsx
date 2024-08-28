import React, { useEffect } from 'react'
import { Footer } from './components/footer/Footer'
import { WhiteNavBar } from './components/white-navbar/WhiteNavBar'
import { HomeDetails } from './pages/home/home-details/HomeDetails'
import { HomeNavBar } from './components/home-navbar/HomeNavBar'
import { Intro } from './pages/home/intro/Intro'
import { Categories } from './pages/home/categories/Categories'
import { Products } from './pages/home/product/Products'
import { CateringGallery } from './pages/cateringGallery/CateringGallery'
import { NewCategories } from './pages/home/categories/NewCategories'

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
            <CateringGallery />
            <Footer />
        </>
    )
}
