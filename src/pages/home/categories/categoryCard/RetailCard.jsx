import React from 'react';
import './RetailCard.scss';
import { Link } from 'react-router-dom'


export const RetailCard = ({ title }) => {
  return (
    <Link className='retail-card-container' to='/Retail'>
      <img className='retail-img' src={require('../../../../assets/images/RetailMain.jpg')} alt='Retail' />
      <div className='retail-card'>
        <h3>Retail</h3>
        <div>Al Aseel's mouth-watering sweets and delighted products, available at our signature shops and point of sales, are packaged and presented in elegant boxes</div>
      </div>
    </Link>
  );
}
