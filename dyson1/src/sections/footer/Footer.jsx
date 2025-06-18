import React from 'react';
import './footer.css';
import dysonLogo from '../../images/logo.png';
import telegramIcon from '../../images/icons/telegram.svg';
import vkIcon from '../../images/icons/vk.svg';
import youtubeIcon from '../../images/icons/youtube.svg';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <img src={dysonLogo} alt="Dyson Logo" className="footer-logo" />
          <h3 className="footer-company-text">О компании</h3>
        </div>
        <div className="footer-content">
          <div className="footer-left-section">
            <div className="footer-column footer-shop">
              <h3 className="footer-column-title">Магазин</h3>
              <ul className="footer-links">
                <li><a href="#!">Фены Dyson Supersonic</a></li>
                <li><a href="#!">Стайлеры Dyson Airwrap</a></li>
                <li><a href="#!">Выпрямители Dyson Corrale</a></li>
                <li><a href="#!">Пылесосы</a></li>
                <li><a href="#!">Климатическая техника</a></li>
                <li><a href="#!">Освещение</a></li>
                <li><a href="#!">Аксессуары</a></li>
              </ul>
            </div>

            <div className="footer-column footer-info">
              <h3 className="footer-column-title">Общая информация</h3>
              <ul className="footer-links">
                <li><a href="#!">Новости</a></li>
                <li><a href="#!">Доставка</a></li>
                <li><a href="#!">Гарантия</a></li>
                <li><a href="#!">Оплата товара</a></li>
                <li><a href="#!">Свяжитесь с нами</a></li>
                <li><a href="#!">Политика конфиденциальности</a></li>
                <li><a href="#!">Договор оферты</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-right-section">
            <div className="footer-right-columns">
              <div className="footer-column footer-promotions">
                <h3 className="footer-column-title">Акции</h3>
                <ul className="footer-links">
                  <li><a href="#!">Подарочная коллекция</a></li>
                  <li><a href="#!">Эксклюзивные предложения</a></li>
                </ul>
              </div>

              <div className="footer-column footer-contact">
                <div className="footer-contact-info">
                  <h3 className="footer-column-title">Отдел логистики:</h3>
                  <h3 className="footer-phone"><a href="tel:+79998004554">+7 (999) 800-45-54</a></h3>
                </div>
                <div className="footer-social-icons">
                  <a href="#!" aria-label="Telegram"><img src={telegramIcon} alt="Telegram" /></a>
                  <a href="#!" aria-label="VK"><img src={vkIcon} alt="VK" /></a>
                  <a href="#!" aria-label="YouTube"><img src={youtubeIcon} alt="YouTube" /></a>
                </div>
              </div>
            </div>
            <p className="footer-copyright">Интернет-магазин dysmarket.ru, 2022 © Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 