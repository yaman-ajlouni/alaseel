import React from 'react'
import { Intro } from './pages/intro/Intro'
import { Categories } from './pages/categories/Categories'
import Logo from './components/logo/Logo'
import { Story } from './pages/story/Story'
import { Products } from './pages/product/Products'
import { Footer } from './components/footer/Footer'

export const Home = () => {
    return (
        <>
            <Intro />
            <Categories />
            {/* <Story /> */}
            {/* <Logo /> */}
            <Products />
            <Footer />
        </>
    )
}
