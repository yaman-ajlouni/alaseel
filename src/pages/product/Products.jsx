import React from 'react';
import './Products.scss';
import sampleImage from '../../assets/images/product1.jpeg'; // Adjust the path to your image

export const Products = () => {
  return (
    <div className='products-out-container'>
        <div className='products-top-container'>
            <h3 className='products-top-title'>Products</h3>
            <div className='products-top-details'>
                Meeting the latest market demand and exceeding customer satisfaction have always been our primary concerns.
            </div>
        </div>
        <div className='products-bottom-container'>
            <div className='product-card'>
                <img src={sampleImage} alt="Product 1" className='product-image' />
                <div className='product-name'>Product 1</div>
            </div>
            <div className='product-card'>
                <img src={sampleImage} alt="Product 2" className='product-image' />
                <div className='product-name'>Product 2</div>
            </div>
            <div className='product-card'>
                <img src={sampleImage} alt="Product 3" className='product-image' />
                <div className='product-name'>Product 3</div>
            </div>
            <div className='product-card'>
                <img src={sampleImage} alt="Product 3" className='product-image' />
                <div className='product-name'>Product 3</div>
            </div>
            <div className='product-card'>
                <img src={sampleImage} alt="Product 3" className='product-image' />
                <div className='product-name'>Product 3</div>
            </div>
        </div>
    </div>
  );
}
