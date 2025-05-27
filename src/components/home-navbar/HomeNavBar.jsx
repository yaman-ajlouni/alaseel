import { useState, useEffect, useRef } from 'react';
import './HomeNavBar.scss';
import { Link, useLocation } from 'react-router-dom';
import 'primeicons/primeicons.css';

export const HomeNavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();
    const [place ,setPlace] = useState("");

    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target) && !event.target.closest('.pi-align-justify')) {
                setShowMenu(false);
            }
        };

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        const place = location.pathname.slice(1);
        localStorage.setItem('tab', place);
        setPlace(place === '' ? 'main' : place);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [location]);

    return (
        <div className={`home-navbar-out-container ${scrolled ? 'scrolled' : ''}`}>
            <div className='home-navbar-logo-container'>
                <div className='pi pi-align-justify' onClick={toggleMenu}></div>
                <img className='home-navbar-logo' src={require('../../assets/images/main-logo.png')} alt="Logo" />
            </div>
            <ul ref={navRef} className={`home-navbar-details-container ${showMenu ? 'active' : ''} ${scrolled ? 'scrolled' : ''}`}>
                <Link to='/' className={`link ${localStorage.getItem('tab') === '' ? 'visited' : ''}`}>
                    Home
                </Link>
                <Link to='/About' className={`link ${localStorage.getItem('tab') === 'About' ? 'visited' : ''}`}>
                    About
                </Link>
                <Link to='/Retail' className={`link ${localStorage.getItem('tab') === 'Retail' ? 'visited' : ''}`}>
                    Menu
                </Link>
                <Link to='/Catering' className={`link ${localStorage.getItem('tab') === 'Catering' ? 'visited' : ''}`}>
                    Catering
                </Link>
                <Link to='/Contact' className={`link ${localStorage.getItem('tab') === 'Contact' ? 'visited' : ''}`}>
                    Contact
                </Link>
            </ul>
        </div>
    );
};
