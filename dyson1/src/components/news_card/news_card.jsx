import React from 'react';
import './news_card.css'

const NewsCard = ({ image, date, title, description }) => {
  return (
    <div className="news-card">
      <div className="news-card__image-wrapper">
        <img src={image} alt={title} className="news-card__image" />
      </div>
      <div className='news-card__text'>
        <p className="news-card__date">{date}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__description">{description}</p>
        <p><a href="#!" className="news-card__read-more">Читать далее</a></p>
        </div>
    </div>
  );
};

export default NewsCard; 