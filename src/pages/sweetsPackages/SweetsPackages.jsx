import React, { useEffect } from 'react';
import './SweetsPackages.scss';
import { NavBar } from '../../components/navbar/NavBar';
import { Footer } from '../../components/footer/Footer';

const sweetPackages = [
    { title: 'Chocolate Delight', description: 'Rich dark chocolate with a hint of vanilla.', image: 'box1.webp' },
    { title: 'Nutty Heaven', description: 'A blend of roasted nuts coated in a light layer of honey.', image: 'box2.webp' },
    { title: 'Caramel Crunch', description: 'Crunchy caramel treats with a pinch of sea salt.', image: 'box3.jpg' },
    { title: 'Fruit Medley', description: 'Dried fruits mixed with hints of cinnamon and sugar.', image: 'box4.jpg' },
    { title: 'Pistachio Bliss', description: 'Fresh pistachios wrapped in delicate pastry layers.', image: 'box5.webp' },
    { title: 'Honeyed Almonds', description: 'Roasted almonds soaked in organic honey.', image: 'box6.webp' },
    // Add more unique packages if needed
];

export const SweetsPackages = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    return (
        <div>
            <NavBar />
            <div className='sweets-packages-container'>
                <h2>Our Sweet Boxes and Packages</h2>
                <div className='packages-grid'>
                    {sweetPackages.map((pkg, index) => (
                        <div key={index} className='package-card'>
                            <img src={require(`../../assets/images/packageImages/${pkg.image}`)} alt={pkg.title} />
                            <div className='package-card-content'>
                                <h3>{pkg.title}</h3>
                                <p>{pkg.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};
