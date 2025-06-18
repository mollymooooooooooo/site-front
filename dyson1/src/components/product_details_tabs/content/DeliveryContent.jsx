import React from 'react';
import DeliveryMap from '../../deliverymap/deliverymap';

const DeliveryContent = () => {
    return (
        <div className="tab-content-description-content-wrapper">
            <div className="delivery-section-content">
                {/* Блоки доставки */}
                <div className="delivery-info-blocks">
                    <div className="delivery-info-block">
                        <h3>Доставка по Москве</h3>
                        <ul>
                            <li>Доставка продукции по Москве и МО в течение 2 часов в день заказа или в любой удобный день.</li>
                            <li>Стоимость доставки по Москве — 0 р.</li>
                            <li>Стоимость доставки за МКАД: 500 р, до 10 км.</li>
                            <li>Стоимость доставки более 10 км — рассчитывается отдельно оператором.</li>
                            <li>Оплата возможна при получении курьеру после проверки продукции.</li>
                        </ul>
                    </div>
                    <div className="delivery-info-block">
                        <h3>Доставка в регионы</h3>
                        <ul>
                            <li>Стоимость доставки в регионы осуществляется компанией Boxberry и рассчитывается отдельно оператором.</li>
                            <li>Оплата возможна при получении курьеру после проверки продукции.</li>
                        </ul>
                    </div>
                </div>

                {/* Карта с пунктами выдачи */}
                <DeliveryMap />

                {/* Расчет стоимости */}
                <div className="delivery-calc-block">
                    <h3>Расчет стоимости курьерской доставки</h3>
                    <form>
                        <div className="delivery-calc-field">
                            <input type="text" placeholder="Введите город" />
                        </div>
                        <div className="delivery-calc-field">
                            <input type="text" placeholder="Сумма заказа" />
                        </div>
                        <div className="delivery-calc-field">
                            <select>
                                <option>Срок доставки</option>
                                <option>В течение дня</option>
                                <option>На следующий день</option>
                                <option>В удобную дату</option>
                            </select>
                        </div>
                        <button type="button" className="delivery-calc-btn">Рассчитать</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DeliveryContent; 