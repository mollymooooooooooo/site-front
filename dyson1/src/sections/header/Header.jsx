import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import "./header.css";
import { CSSTransition } from 'react-transition-group';

import logoImg from './../../images/logo.png';
import burger from './../../images/icons/burger.png';
import cart from './../../images/icons/cart.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getCartCount } = useCart();
    const cartCount = getCartCount();
    const navRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const formatCartCount = (count) => {
        return count > 99 ? '99+' : count;
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header_row">
                    <div className="header_left">
                        <button className="burger hover-opacity" onClick={toggleMenu}>
                            <img src={burger} alt="Menu"/>
                        </button>
                        <Link to="/" className="header_logo hover-opacity">
                            <img src={logoImg} alt="Logo"/>
                        </Link>
                    </div>
                    <CSSTransition
                        in={isMenuOpen}
                        timeout={300}
                        classNames="header_nav-anim"
                        unmountOnExit
                        nodeRef={navRef}
                    >
                        <nav className="header_nav" ref={navRef}>
                            <ul>
                                <li><Link to="/about" className="hover-opacity">О нас</Link></li>
                                <li><Link to="/delivery" className="hover-opacity">Доставка и оплата</Link></li>
                                <li><Link to="/register" className="hover-opacity">Регистрация продукта</Link></li>
                                <li><Link to="/service" className="hover-opacity">Сервис</Link></li>
                                <li><Link to="/certificates" className="hover-opacity">Сертификаты и лицензии</Link></li>
                            </ul>
                        </nav>
                    </CSSTransition>
                    <div className="header_right">
                        <Link to="/cart" className="cart-link hover-opacity">
                            <img src={cart} alt="Cart"/>
                            {cartCount > 0 && (
                                <span className="cart-count">{formatCartCount(cartCount)}</span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

// import { useState } from 'react';
// import "./header.css";
// import logoImg from './../../images/icons/logo.png';
// import burger from './../../images/icons/burger.png';
// import cart from './../../images/icons/cart.png';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header_row">
//           <div className="header_left">
//             <button 
//               className="burger-button" 
//               aria-expanded="false"
//               aria-controls = 'header_nav'
//             >
//               <img src={burger} alt="" />
//             </button>
//             <div className="header_logo">
//               <img src={logoImg} alt="Логотип компании" />
//             </div>
//           </div>
          
//           <nav 
//             className={`header_nav ${isMenuOpen ? 'active' : ''}`}
//             aria-hidden={!isMenuOpen}
//           >
//             <ul>
//               <li><a href="!!!">О нас</a></li>
//               <li><a href="!!!">Доставка и оплата</a></li>
//               <li><a href="!!!">Регистрация продукта</a></li>
//               <li><a href="!!!">Сервис</a></li>
//               <li><a href="!!!">Сертификаты и лицензии</a></li>
//             </ul>
//           </nav>
          
//           <div className="header_right">
//             <img src={cart} alt="Корзина покупок"/>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
