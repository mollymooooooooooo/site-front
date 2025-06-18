import React, { useState, useEffect } from 'react';
import NewsCard from '../../components/news_card/news_card.jsx';
import './news.css';
import news_image from '../../images/news/news_image.png';
import ToggleExpandButton from '../../components/show_more/ToggleExpandButton.jsx'

const News = () => {
    const newsData = [
        {
            id: 1,
            image: news_image,
            date: '21 декабря 2022',
            title: 'Есть ли безопасные выпрямители для волос',
            description: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.'
        },
        {
            id: 2,
            image: news_image,
            date: '21 декабря 2022',
            title: 'Есть ли безопасные выпрямители для волос',
            description: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.'
        },
        {
            id: 3,
            image: news_image,
            date: '21 декабря 2022',
            title: 'Есть ли безопасные выпрямители для волос',
            description: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.'
        },
        {
            id: 4,
            image: news_image,
            date: '21 декабря 2022',
            title: 'Есть ли безопасные выпрямители для волос',
            description: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.'
        },
        {
            id: 5,
            image: news_image,
            date: '21 декабря 2022',
            title: 'Есть ли безопасные выпрямители для волос',
            description: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.'
        },
        {
            id: 6,
            image: news_image,
            date: '21 декабря 2022',
            title: 'Есть ли безопасные выпрямители для волос',
            description: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.'
        },
    ];

    const [numDisplayed, setNumDisplayed] = useState(window.innerWidth <= 768 ? 2 : 3);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth <= 768) {
                setNumDisplayed(isExpanded ? newsData.length : 2);
            } else {
                setNumDisplayed(isExpanded ? newsData.length : 3);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded, newsData.length]);

    const handleToggle = () => {
        if (isExpanded) {
            setNumDisplayed(isMobile ? 2 : 3);
        } else {
            setNumDisplayed(newsData.length);
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="news-section">
            <div className="container">
                <h2 className="news-title">Новости</h2>
                <div className="news-grid">
                    {newsData.slice(0, numDisplayed).map(news => (
                        <NewsCard 
                            key={news.id}
                            image={news.image}
                            date={news.date}
                            title={news.title}
                            description={news.description}
                        />
                    ))}
                </div>
                {newsData.length > (isMobile ? 2 : 3) && (
                    <ToggleExpandButton 
                        onClick={handleToggle}
                        isExpanded={isExpanded}
                        expandedText="Свернуть"
                        collapsedText="Показать еще"
                    />
                )}
            </div>
        </section>
    );
};

export default News;
