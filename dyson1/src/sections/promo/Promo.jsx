import './promo.css';
import promo_img from "../../images/promo_images/promo1.png";


const Promo = () => {
    return (<section className="promo">
        <div className='container_promo'>
            <div className='promo__content'>
                <div className='promo__text'>
                    <h1 className='promo__title'>
                        Уникальные технологии для ухода за волосами
                        </h1>
                    <p className='promo__description'>
                        Идеальная укладка для всех типов волос вместе с Dyson
                        </p>
                    <div className='btn__wrapper'><a href="#!">Подробнее</a></div>
                </div>
                <div className='promo__img'><img src={promo_img} alt="promo_img"></img></div>
            </div>
        </div>
    </section>);
}
 
export default Promo;