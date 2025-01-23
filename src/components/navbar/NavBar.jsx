import React, { useState, useEffect, useRef } from 'react';
import './NavBar.scss';
import { Link, useLocation } from 'react-router-dom';
import 'primeicons/primeicons.css';
import { ImageLoader } from '../imageLoader/ImageLoader';

export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();
    const [place, setPlace] = useState("");

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
        setPlace(place === "" ? "main" : place);

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
        <div className='navbar-out-container'>
            <div className='navbar-logo-container'>
                <div className='pi pi-align-justify' onClick={toggleMenu}></div>
                <ImageLoader
                    src={require('../../assets/images/mix-logo.png')}
                    alt="Logo"
                    className="navbar-logo"
                />
            </div>
            <ul ref={navRef} className={`navbar-details-container ${showMenu ? 'active' : ""}`}>
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
