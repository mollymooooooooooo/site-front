import React, { useState } from 'react';
import ProductCard from '../../components/product_card/product_card.jsx';
import ToggleExpandButton from '../../components/show_more/ToggleExpandButton.jsx';
import './similar_items.css';

import productCardImg1 from '../../images/product_images/products/supersonichd07.png';
import productCardImg2 from '../../images/product_images/products/supersonichd07_5c.png';
import productCardImg3 from '../../images/product_images/products/supersonichd03purple.png';

const SimilarItems = () => {
    const initialProducts = [
        {
            id: 1,
            image: productCardImg1,
            title: 'Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческамия',
            inStock: true,
            price: 59990,
            oldPrice: 69990
        },
        {
            id: 2,
            image: productCardImg2,
            title: 'Фен Dyson Supersonic HD07 с 5 насадками и подставкой',
            inStock: true,
            price: 47990,
            oldPrice: 51990
        },
        {
            id: 3,
            image: productCardImg3,
            title: 'Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет сирень',
            inStock: true,
            price: 46990,
            oldPrice: 49990
        },
    ];

    const [displayedProducts, setDisplayedProducts] = useState(initialProducts);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        // In a real application, you would fetch more products here
        // For now, let's just duplicate the initial products for demonstration
        if (isExpanded) {
            setDisplayedProducts(initialProducts);
        } else {
            setDisplayedProducts([...initialProducts, ...initialProducts]); // Simulate loading more
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="similar-items-section">
            <div className="container">
                <h2 className="similar-items-title">Похожие товары</h2>
                <div className="similar-items-grid">
                    {displayedProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            inStock={product.inStock}
                            price={product.price}
                            oldPrice={product.oldPrice}
                        />
                    ))}
                </div>
                {/* Only show the button if there are more items to potentially load */}
                <ToggleExpandButton 
                    onClick={handleToggle}
                    isExpanded={isExpanded}
                    collapsedText="Показать еще"
                    expandedText="Свернуть"
                />
            </div>
        </section>
    );
};

export default SimilarItems; 