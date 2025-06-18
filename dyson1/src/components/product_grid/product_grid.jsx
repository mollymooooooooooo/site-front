import React, { useState, useEffect } from 'react';
import ProductCard from '../product_card/product_card';
import './product_grid.css';
import dysonHd07Blue from '../../images/product_cards/dyson-hd07-blue.png';
import dysonHd07Stand from '../../images/product_cards/dyson-hd07-stand.png';
import dyson4Purple from '../../images/product_cards/dyson-4-purple.png';
import arrowCategory from '../../images/icons/arrow_category.svg';

const ProductGrid = ({ onProductCountChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('popular');
    
    const products = [
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
            orderCount: 256
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
            orderCount: 189
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
            orderCount: 142
        },
        {
            id: 4,
            image: dysonHd07Blue,
            title: "Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческами",
            price: 59990,
            oldPrice: 69990,
            inStock: true,
            discount: 15,
            deliveryDate: "2024-02-15",
            rating: 4.8,
            orderCount: 256
        },
        {
            id: 5,
            image: dysonHd07Stand,
            title: "Фен Dyson Supersonic HD07 с 5 насадками и подставкой",
            price: 47990,
            oldPrice: 51990,
            inStock: true,
            discount: 15,
            deliveryDate: "2024-03-01",
            rating: 4.9,
            orderCount: 189
        },
        {
            id: 6,
            image: dyson4Purple,
            title: "Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет сирень",
            price: 46990,
            oldPrice: 51990,
            inStock: true,
            discount: 15,
            deliveryDate: "2024-03-10",
            rating: 4.7,
            orderCount: 142
        },
        {
            id: 7,
            image: dysonHd07Stand,
            title: "Фен Dyson Supersonic HD07 с 5 насадками и подставкой",
            price: 47990,
            oldPrice: 51990,
            inStock: true,
            discount: 15,
            deliveryDate: "2024-03-01",
            rating: 4.9,
            orderCount: 189
        }
    ];

    useEffect(() => {
        if (onProductCountChange) {
            onProductCountChange(products.length);
        }
    }, [products.length, onProductCountChange]);

    const ITEMS_PER_ROW = 3;
    const MAX_ROWS = 2;
    const itemsPerPage = ITEMS_PER_ROW * MAX_ROWS;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const getSortedProducts = () => {
        const sortedProducts = [...products];
        switch (sortBy) {
            case 'price-asc':
                return sortedProducts.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return sortedProducts.sort((a, b) => b.price - a.price);
            case 'rating':
                return sortedProducts.sort((a, b) => b.rating - a.rating);
            case 'orders':
                return sortedProducts.sort((a, b) => b.orderCount - a.orderCount);
            case 'newest':
                return sortedProducts.sort((a, b) => new Date(b.deliveryDate) - new Date(a.deliveryDate));
            case 'popular':
            default:
                return sortedProducts.sort((a, b) => b.orderCount - a.orderCount);
        }
    };

    const getCurrentPageProducts = () => {
        const sortedProducts = getSortedProducts();
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedProducts.slice(startIndex, endIndex);
    };

    const renderEmptyCard = (index) => (
        <div key={`empty-${index}`} className="product-card product-card--empty">
            <div className="product-card__image">
                <div className="product-card__img-placeholder"></div>
            </div>
            <div className="product-card__info">
                <h3 className="product-card__title"></h3>
                <div className="product-card__availability"></div>
                <div className="product-card__price-block">
                    <div className="product-card__price"></div>
                </div>
                <div className="product-card__actions">
                    <div className="product-card__quantity">
                        <button className="product-card__quantity-btn">−</button>
                        <input className="product-card__quantity-input" readOnly />
                        <button className="product-card__quantity-btn">+</button>
                    </div>
                    <button className="product-card__add-to-cart"></button>
                </div>
            </div>
        </div>
    );

    const renderProductRows = () => {
        const currentProducts = getCurrentPageProducts();
        const rows = [];

        // Всегда создаем MAX_ROWS количество рядов
        for (let i = 0; i < MAX_ROWS; i++) {
            const startIdx = i * ITEMS_PER_ROW;
            const rowProducts = currentProducts.slice(startIdx, startIdx + ITEMS_PER_ROW);
            // Удаляем пустые слоты
            if (rowProducts.length === 0) continue;
            rows.push(
                <div key={`row-${i}`} className="product-grid__row">
                    {rowProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>
            );
        }

        return rows;
    };

    return (
        <div className="products-section">
            <div className="products-header">
                <select 
                    className="sort-select" 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="popular">Сначала популярные</option>
                    <option value="price-asc">По возрастанию цены</option>
                    <option value="price-desc">По убыванию цены</option>
                    <option value="rating">По рейтингу</option>
                    <option value="orders">По количеству заказов</option>
                    <option value="newest">По новизне</option>
                </select>
            </div>
            
            <div className="product-grid">
                {getCurrentPageProducts().map(product => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
            {totalPages > 1 && (
                <div className="pagination">
                    <div className="pagination__arrows">
                        <button 
                            className="pagination__btn" 
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                        >
                            <img src={arrowCategory} alt="Назад" />
                        </button>
                        <button 
                            className="pagination__btn" 
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            <img src={arrowCategory} alt="Вперед" style={{transform: 'rotate(180deg)'}} />
                        </button>
                    </div>
                    <div className="pagination__numbers">
                        <p className="pagination__info">{currentPage} из {totalPages}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductGrid; 