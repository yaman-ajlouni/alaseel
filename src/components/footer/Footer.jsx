import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Footer.scss';
import 'primeicons/primeicons.css';
import { fetchFooterData } from '../../redux/actions/footerActions';
import { selectFooterData } from '../../redux/reducers/footerReducer';

export const Footer = () => {
    const dispatch = useDispatch();
    const footer = useSelector(selectFooterData);

    useEffect(() => {
        dispatch(fetchFooterData());
    }, [dispatch]);

    // if (footer.loading) return <div>Loading...</div>;
    // if (footer.error) return <div>Error: {footer.error}</div>;

    return (
        <div className='footer-out-container'>
            <div className='footer-top-container'>
                <img className='footer-logo' src={require('../../assets/images/white-second-logo.PNG')} alt="ALASEEL Logo" />
                <div className='footer-social-container'>
                    <a href='https://www.facebook.com/share/KqUrj5Hb3dBENN4B/?mibextid=LQQJ4d' target='blank' className='pi pi-facebook'></a>
                    <a href='https://www.instagram.com/alaseelsweets?igsh=bTJnOG8xanBoaWV4' target='blank' className='pi pi-instagram'></a>
                </div>
            </div>
            <div className='footer-bottom-container'>
                <div className='footer-details-container'>
                    <div>Damascus - Syria</div>
                    <div>TEL: {footer.tel} - FAX: {footer.fax}</div>
                    <div>MOB: {footer.mob} - E-MAIL: {footer.email}</div>
                    <b>POWERED BY <a href={footer.poweredBy} target="_blank" rel="noopener noreferrer">Yaman Ajlouni</a></b>
                </div>
            </div>
        </div>
    );
};
