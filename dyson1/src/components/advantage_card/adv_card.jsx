import "./adv_card.css";
import cart from "../../images/advantages/cart.svg";
import delivery from "../../images/advantages/delivery.svg";
import special from "../../images/advantages/special.svg";
import guarantee from "../../images/advantages/guarantee.svg";
import payment from "../../images/advantages/payment.svg";
import consultation from "../../images/advantages/consultation.svg";

const icons = {
    cart,
    delivery,
    special,
    guarantee,
    payment,
    consultation
};

const Card = ({ title, description, icon }) => {
    return ( 
        <div className="card">
            <div className="card__content">
                <div className="card__image__wrapper">
                <img className="card__img" src={icons[icon]} alt={title}/>
                </div>
                <div className="card__text">
                    <h4 className="card__title">{title}</h4>
                    <p className="card__description">{description}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Card;