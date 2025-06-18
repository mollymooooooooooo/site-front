import React, { useState } from 'react';
import ProductGrid from '../../components/product_grid/product_grid';
import './category_product_section.css';

const CategoryProductSection = () => {
    const [productCount, setProductCount] = useState(0);

    const handleProductCountChange = (count) => {
        setProductCount(count);
    };

    return (
        <section className="category-product-section">
            <div className="container">
                <div className="breadcrumbs">
                    <a href="/" className="breadcrumb-link">Главная</a>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">Фены Dyson</span>
                </div>
                <h1 className="category-product-title">Фены Dyson <span className="product-count">{productCount}</span></h1>
                <ProductGrid onProductCountChange={handleProductCountChange} />
            </div>
        </section>
    );
};

export default CategoryProductSection; 