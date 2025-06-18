import React from 'react';
import img1 from '../../../images/product_main/img1.png';
import img2 from '../../../images/product_main/img2.png';
import img3 from '../../../images/product_main/img3.png';
import img4 from '../../../images/product_main/img4.png';

const BundleContent = () => {
    const bundleItems = [
        {
            id: 1,
            image: img1,
            title: 'Комплектация',
            description: 'Главное отличие фена Dyson в быстром и безопасном высушивании волос. В рукоятку встроен датчик температуры, благодаря которому она не поднимается выше 100 градусов.'
        },
        {
            id: 2,
            image: img2,
            title: 'Комплектация',
            description: 'Главное отличие фена Dyson в быстром и безопасном высушивании волос.'
        },
        {
            id: 3,
            image: img3,
            title: 'Комплектация',
            description: 'Главное отличие фена Dyson в быстром и безопасном высушивании волос.'
        },
        {
            id: 4,
            image: img4,
            title: 'Комплектация',
            description: 'Главное отличие фена Dyson в быстром и безопасном высушивании волос.'
        }
    ];

    const mainBundleItem = bundleItems[0];
    const smallBundleItems = bundleItems.slice(1);

    return (
        <div className="tab-content bundle-content">
            <div key={mainBundleItem.id} className="bundle-item main-bundle-item">
                <img src={mainBundleItem.image} alt={mainBundleItem.title} className="bundle-item-image" />
                <div className="bundle-item-info">
                    <h3>{mainBundleItem.title}</h3>
                    <p>{mainBundleItem.description}</p>
                </div>
            </div>
            <div className="bundle-right-column">
                {smallBundleItems.map(item => (
                    <div key={item.id} className="bundle-item small-bundle-item">
                        <img src={item.image} alt={item.title} className="bundle-item-image" />
                        <div className="bundle-item-info">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BundleContent; 