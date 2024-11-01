import React from 'react';
import './WhiteNavBar.scss';
import { Link, useLocation } from 'react-router-dom';
import 'primeicons/primeicons.css';
import { useState, useEffect, useRef } from 'react';
import Aos from 'aos';
import { ImageLoader } from '../loader/ImageLoader'; // Import the ImageLoader component

export const WhiteNavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();
    const [place, setPlace] = useState("");

    useEffect(() => {
        Aos.init();
        return () => {};
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target) && !event.target.closest('.pi-align-justify')) {
                setShowMenu(false);
            }
        };

        const place = location.pathname.slice(1);
        localStorage.setItem("tab", place);
        if (place === "") {
            setPlace("main");
        } else {
            setPlace(place);
        }


        if (showMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showMenu, location]);

    return (
        <div className='white-navbar-out-container'>
            <div className='white-navbar-logo-container'>
                <div className='pi pi-align-justify' onClick={toggleMenu}></div>
                <ImageLoader
                    src={require('../../assets/images/logo-main-not-cut.png')}
                    alt="Logo"
                    className='white-navbar-logo'
                />
            </div>
            <ul ref={navRef} className={`white-navbar-details-container ${showMenu ? 'active' : ""}`}>
                <Link to='/' className={`link ${localStorage.getItem('tab') === "" ? 'visited' : ''}`}>
                    Home
                </Link>
                <Link to='/About' className={`link ${localStorage.getItem('tab') === "About" ? 'visited' : ''}`}>
                    About
                </Link>
                <Link to='/Retail' className={`link ${localStorage.getItem('tab') === "Retail" ? 'visited' : ''}`}>
                    Menu
                </Link>
                <Link to='/Catering' className={`link ${localStorage.getItem('tab') === "Catering" ? 'visited' : ''}`}>
                    Catering
                </Link>
                <Link to='/Contact' className={`link ${localStorage.getItem('tab') === "Contact" ? 'visited' : ''}`}>
                    Contact
                </Link>
            </ul>
        </div>
    );
};
