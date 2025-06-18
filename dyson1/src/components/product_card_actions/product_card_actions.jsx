import React from 'react';
import './styles.css';

const ProductCardActions = ({ 
    quantity, 
    onDecrement, 
    onIncrement, 
    onQuantityChange, 
    onQuantityBlur, 
    onAddToCart 
}) => {
    return (
        <div className="product-card__actions">
            <div className="product-card__quantity" onClick={e => e.stopPropagation()}>
                <button 
                    className="product-card__quantity-btn" 
                    onClick={onDecrement}
                    disabled={quantity <= 1}
                >
                    −
                </button>
                <input 
                    type="text" 
                    className="product-card__quantity-input" 
                    value={quantity}
                    onChange={onQuantityChange}
                    onBlur={onQuantityBlur}
                />
                <button 
                    className="product-card__quantity-btn" 
                    onClick={onIncrement}
                >
                    +
                </button>
            </div>
            <button 
                className="product-card__add-to-cart"
                onClick={onAddToCart}
            >
                В корзину
            </button>
        </div>
    );
};

export default ProductCardActions; 