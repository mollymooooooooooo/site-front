import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ProductCardActions from '../../components/product_card_actions/product_card_actions';
import './item_main.css';

// Import product images and data from where ProductGrid is getting it
import dysonHd07Blue from '../../images/product_cards/dyson-hd07-blue.png';
import dysonHd07Stand from '../../images/product_cards/dyson-hd07-stand.png';
import dyson4Purple from '../../images/product_cards/dyson-4-purple.png';

// Import images from src/images/product_main
import img1 from '../../images/product_main/img1.png';
import img2 from '../../images/product_main/img2.png';
import img3 from '../../images/product_main/img3.png';
import img4 from '../../images/product_main/img4.png';
import img5 from '../../images/product_main/img5.png';

import arrowIcon from '../../images/icons/arrow_item_photo.svg';

const allProducts = [
    {
        id: 1,
        image: dysonHd07Blue,
        title: "Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческами",
        price: 59990,
        oldPrice: 69990,
        inStock: true,
        discount: 15,
        deliveryDate: "2024-02-15",
        rating: 4.8,
        orderCount: 256,
        thumbnails: [dysonHd07Blue, img1, img2, img3, img4, img5] 
    },
    {
        id: 2,
        image: dysonHd07Stand,
        title: "Фен Dyson Supersonic HD07 с 5 насадками и подставкой",
        price: 47990,
        oldPrice: 51990,
        inStock: true,
        discount: 15,
        deliveryDate: "2024-03-01",
        rating: 4.9,
        orderCount: 189,
        thumbnails: [dysonHd07Stand, img1, img2, img3, img4, img5]
    },
    {
        id: 3,
        image: dyson4Purple,
        title: "Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет сирень",
        price: 46990,
        oldPrice: 51990,
        inStock: true,
        discount: 15,
        deliveryDate: "2024-03-10",
        rating: 4.7,
        orderCount: 142,
        thumbnails: [dyson4Purple, img1, img2, img3, img4, img5]
    }
    // Add other products as needed, mirroring the structure in ProductGrid
];

const Item = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState(null);
    const [currentThumbIndex, setCurrentThumbIndex] = useState(0);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [isDescriptionOverflow, setIsDescriptionOverflow] = useState(false);
    const descriptionRef = useRef(null);
    const { addToCart } = useCart();
    const thumbnailsPerPage = 5;

    useEffect(() => {
        const foundProduct = allProducts.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setMainImage(foundProduct.image);
        } else {
            setProduct(null);
        }
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        if (descriptionRef.current) {
            const element = descriptionRef.current;
            setIsDescriptionOverflow(element.scrollHeight > element.clientHeight);
        }
    }, [product]);

    const handlePrevThumbs = () => {
        setCurrentThumbIndex(prev => 
            prev === 0 ? product.thumbnails.length - thumbnailsPerPage : prev - 1
        );
    };

    const handleNextThumbs = () => {
        setCurrentThumbIndex(prev => 
            prev + thumbnailsPerPage >= product.thumbnails.length ? 0 : prev + 1
        );
    };

    const visibleThumbnails = product?.thumbnails.slice(
        currentThumbIndex,
        currentThumbIndex + thumbnailsPerPage
    ) || [];

    const showPrevButton = currentThumbIndex > 0;
    const showNextButton = currentThumbIndex + thumbnailsPerPage < (product?.thumbnails.length || 0);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        if (quantity < 99) {
            setQuantity(quantity + 1);
        }
    };

    const handleQuantityChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (value === '') {
            setQuantity('');
        } else {
            const parsedValue = parseInt(value, 10);
            setQuantity(Math.min(Math.max(1, parsedValue), 99));
        }
    };

    const handleQuantityBlur = () => {
        if (!quantity || quantity < 1) {
            setQuantity(1);
        } else if (quantity > 99) {
            setQuantity(99);
        }
    };

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
        }
    };

    const toggleDescription = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    };

    if (!product) {
        return <div className="item-main"><div className="container"><h1>Product not found</h1></div></div>;
    }

    return (
        <div className="item-main">
            <div className="container">
                <div className="breadcrumbs">
                    <a href="/" className="breadcrumb-link">Главная</a>
                    <span className="breadcrumb-separator">/</span>
                    <a href="/hairdryers" className="breadcrumb-link">Фены Dyson Supersonic</a>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{product.title}</span>
                </div>
                <div className="item-content">
                    <div className="item-gallery">
                        <div className="thumbnails">
                            {showPrevButton && (
                                <button className="thumb-nav-btn prev" onClick={handlePrevThumbs}>
                                    <img src={arrowIcon} alt="Previous" />
                                </button>
                            )}
                            <div className="thumbnails-list">
                                {visibleThumbnails.map((thumb, index) => (
                                    <div
                                        key={index}
                                        className={`thumbnail ${thumb === mainImage ? 'active' : ''}`}
                                        onClick={() => setMainImage(thumb)}
                                    >
                                        <img src={thumb} alt={`Thumbnail ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            {showNextButton && (
                                <button className="thumb-nav-btn next" onClick={handleNextThumbs}>
                                    <img src={arrowIcon} alt="Next" />
                                </button>
                            )}
                        </div>
                        <div className="item-main-image">
                            <img src={mainImage} alt={product.title} />
                        </div>
                    </div>
                    <div className="item-info">
                        <h1 className="item-title">{product.title}</h1>
                        <div 
                            ref={descriptionRef}
                            className={`item-description ${isDescriptionExpanded ? 'expanded' : ''}`}
                            onClick={isDescriptionOverflow ? toggleDescription : undefined}
                        >
                            Фен Dyson Supersonic HD07 — это инновационный фен, который обеспечивает мощный поток воздуха и точный контроль температуры для бережной сушки волос. Благодаря интеллектуальной системе контроля температуры, фен автоматически регулирует температуру воздуха, чтобы защитить волосы от теплового повреждения. Технология Air Multiplier создает мощный, концентрированный поток воздуха, который быстро и эффективно сушит волосы, сохраняя при этом их естественную красоту и здоровье.
                        </div>
                        <div className="item-availability">
                            <span className="dot"></span>
                            <span className="availability-text">В наличии</span>
                        </div>
                        <div className="item-price-block">
                            {product.oldPrice && <span className="item-old-price">{product.oldPrice.toLocaleString()}Р</span>}
                            <span className="item-current-price">{product.price.toLocaleString()}Р</span>
                        </div>
                        <ProductCardActions
                            quantity={quantity}
                            onDecrement={handleDecrement}
                            onIncrement={handleIncrement}
                            onQuantityChange={handleQuantityChange}
                            onQuantityBlur={handleQuantityBlur}
                            onAddToCart={handleAddToCart}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;