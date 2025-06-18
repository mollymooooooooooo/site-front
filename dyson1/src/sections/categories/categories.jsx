import React from 'react';
import './categories.css';
import salesImg from '../../images/categories/sales.png';
import dryerImg from '../../images/categories/dryer.png';
import stylerImg from '../../images/categories/styler.png';
import rectifierImg from '../../images/categories/rectifier.png';
import arrow from '../../images/icons/arrow.svg';


const Sections = () => {
    const categories = [
        {
            id: 1,
            title: 'Акции',
            image: salesImg,
            link: '/sales'
        },
        {
            id: 2,
            title: 'Фены',
            image: dryerImg,
            link: '/hairdryers'
        },
        {
            id: 3,
            title: 'Стайлеры',
            image: stylerImg,
            link: '/stylers'
        },
        {
            id: 4,
            title: 'Выпрямители',
            image: rectifierImg,
            link: '/rectifiers'
        }
    ];

    return (
        <section className="sections">
            <div className="container">
                <div className="sections__grid">
                    {categories.map((category) => (
                        <a href={category.link} className="sections__card" key={category.id}>
                            <div className="img_container">
                                <img 
                                    src={category.image} 
                                    alt={category.title} 
                                    className="sections__image"
                                />
                            </div>
                            <div className="sections__text">
                                <h3 className="sections__title">{category.title}</h3>
                                <div className="sections__description">
                                    <p className='More'>
                                        Подробнее
                                        <img src={arrow} className='arrow' alt="arrow"/>
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sections;