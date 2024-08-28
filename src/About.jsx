import React, { useEffect } from 'react'
import { Story } from './pages/about/story/Story'
import { HomeAbout } from './pages/about/hmoe-about/HomeAbout'
import './About.scss'
import { WhiteNavBar } from './components/white-navbar/WhiteNavBar'
import { NavBar } from './components/navbar/NavBar'
import { Footer } from './components/footer/Footer'
import { AboutVision } from './pages/about/about-vision/AboutVision'
import { AboutValue } from './pages/about/about-value/AboutValue'

export const About = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='about-container'>
            {/* <WhiteNavBar />` */}
            <NavBar />
            <Story />
            <HomeAbout />
            <AboutVision />
            <AboutValue />
            <Footer />
        </div>
    )
}
