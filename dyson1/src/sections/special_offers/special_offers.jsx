import React, { useState } from 'react';
import ProductGrid from '../../components/product_grid/product_grid';
import './special_offers.css';

const SpecialOffers = () => {
    const [activeFilters, setActiveFilters] = useState([]);
    const [sortBy, setSortBy] = useState('popular');

    const filters = [
        { id: 'long-hair', label: 'dyson стайлер для длинных волос' },
        { id: 'red', label: 'dyson стайлер красный' },
        { id: 'complete', label: 'dyson hot1 airwrap complete' },
        { id: 'brush', label: 'фен щетка дайсон' }
    ];

    const handleFilterClick = (filterId) => {
        if (activeFilters.includes(filterId)) {
            setActiveFilters(activeFilters.filter(id => id !== filterId));
        } else {
            setActiveFilters([...activeFilters, filterId]);
        }
    };

    // Get products count from ProductGrid
    const products = [
        {
            id: 1,
            image: "/images/products/dyson-hd07-blue.png",
            title: "Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческами",
            price: 59990,
            oldPrice: 69990,
            inStock: true,
            discount: 15,
        },
        {
            id: 2,
            image: "/images/products/dyson-hd07-stand.png",
            title: "Фен Dyson Supersonic HD07 с 5 насадками и подставкой",
            price: 47990,
            oldPrice: 51990,
            inStock: true,
            discount: 15,
        },
        {
            id: 3,
            image: "/images/products/dyson-4-purple.png",
            title: "Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет сирень",
            price: 46990,
            oldPrice: 51990,
            inStock: true,
            discount: 15,
        },
        {
            id: 4,
            image: "/images/products/dyson-hd07-blue.png",
            title: "Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческами",
            price: 59990,
            oldPrice: 69990,
            inStock: true,
            discount: 15,
        },
        {
            id: 5,
            image: "/images/products/dyson-hd07-stand.png",
            title: "Фен Dyson Supersonic HD07 с 5 насадками и подставкой",
            price: 47990,
            oldPrice: 51990,
            inStock: true,
            discount: 15,
        },
        {
            id: 6,
            image: "/images/products/dyson-4-purple.png",
            title: "Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет сирень",
            price: 46990,
            oldPrice: 51990,
            inStock: true,
            discount: 15,
        },
        {
            id: 7,
            image: "/images/products/dyson-hd07-stand.png",
            title: "Фен Dyson Supersonic HD07 с 5 насадками и подставкой",
            price: 47990,
            oldPrice: 51990,
            inStock: true,
            discount: 15,
        }
    ];

    return (
        <div className="special-offers">
            <div className="container">
            <div className="special-offers-content">
                <div className="special-offers__header">
                    <div className="special-offers__title-block">
                        <h1 className="special-offers__title">Спецпредложения
                        <span className="special-offers__count"> {products.length}</span>
                        </h1>
                    </div>
                </div>                    
                <ProductGrid />
            </div>
            </div>
        </div>
    );
};

export default SpecialOffers;