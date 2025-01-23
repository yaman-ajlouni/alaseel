import React from 'react';
import './Story.scss';
import { ImageLoader } from '../../../components/imageLoader/ImageLoader'; // Adjust the path if needed

export const Story = () => {
    return (
        <div className='story-out-container'>
            <div className='story-left-container'>
                <h2>About Us</h2>
                <p>
                    We have endeavored from the beginning to offer our dear customers the special taste.
                    Where our products combine the beauty of manufacturing, high quality components and long experience by the best workers in this field. Therefore, the taste (the original and deep-rooted flavor that satisfies and convinces our valued customers more that any other flavor) was the result of these efforts.
                    In preperation, we use the finest types of nuts such as pistachios, cashews, purified walnuts one by one, pure Arabic ghee, cheese and fresh cream, and flour made from the best grains of wheat taken from the ears of the fields of our dear homeland. 
                    And you can count on us to cover all the incantations and banquets on your special occasions, through our ancient kitchen, which offers the most delicious and delicious dishes: and in order to ensure your comfort, 
                    we secure all the necessary decorations and furniture for these occasions for these occasions. Tables, etc.. 
                    In short, you can count on us from A to Z.
                    Your trust that we have gained over time makes us unite our efforts to offer you the authentic taste of Al Aseel Sweets and Food.
                </p>
            </div>
            <div className='story-right-container'>
                <ImageLoader
                    src={require('../../../assets/images/sweetLuxury-main-logo.png')}
                    alt="Company Image"
                    className='story-image'
                />
            </div>
        </div>
    );
}
