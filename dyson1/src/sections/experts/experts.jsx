import React from 'react';
import './experts.css';
import expertsImage from '../../images/experts/experts.png';

const Experts = () => {
    return (
        <section className="experts">
            <div className="container">
                <div className="experts__content">
                    <div className="experts__info">
                        <h2 className="experts__title">
                            Мнение экспертов о технике Dyson
                        </h2>
                        <div className="experts__text">
                            <p>
                                Сегодня многие стилисты и салоны красоты в своей работе используют технику от Dyson.
                            </p>
                            <p>
                                Несмотря на высокую стоимость, техника Dyson помогает экономить. Мастера тратят меньше времени на сушку и укладку волос, благодаря чему успевают обслужить большее количество клиентов. Также устройства от Dyson потребляют значительно меньше электроэнергии, не теряя свою мощность.
                            </p>
                            <p>
                                Фены Dyson универсальны. Они подходят для сушки разных типов волос. Насадки из комплекта помогают создавать укладки на любой вкус. Функциональность девайсов впечатляет не меньше, чем их уникальный дизайн.
                            </p>
                            <p>
                                Ведущие стилисты отмечают, что техника Dyson для ухода за волосами идеально подходят для длительной работы за счет своей эргономичности. А за счет бесшумности инновационного мотора использование устройств стало максимально комфортным.
                            </p>
                        </div>
                    </div>
                    <div className="experts__image">
                        <img src={expertsImage} alt="Эксперт Dyson" />
                    </div>
                </div>
            </div>
        </section>);
}
export default Experts;