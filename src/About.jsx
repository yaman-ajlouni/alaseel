import React from 'react'
import { Story } from './pages/story/Story'
import { HomeAbout } from './pages/AboutPage/hmoe-about/HomeAbout'
import './About.scss'

export const About = () => {
    return (
        <div className='about-container'>
            <Story />
            <HomeAbout />
        </div>
    )
}
