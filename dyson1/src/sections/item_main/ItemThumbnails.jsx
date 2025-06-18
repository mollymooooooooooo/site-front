import React, { useState, useEffect } from 'react';
import arrowIcon from '../../images/icons/arrow_item_photo.svg';
import './ItemThumbnails.css';

const ItemThumbnails = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxVisibleItems = 5;
    const totalItems = images.length;

    const handleScrollUp = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const handleScrollDown = () => {
        setCurrentIndex(prev => Math.min(totalItems - maxVisibleItems, prev + 1));
    };

    const visibleImages = images.slice(currentIndex, currentIndex + maxVisibleItems);

    return (
        <div className="item-thumbnails">
            <div className="thumbnails-container">
                {currentIndex > 0 && (
                    <button 
                        className="thumbnail-nav-button up-button"
                        onClick={handleScrollUp}
                    >
                        <img src={arrowIcon} alt="Scroll up" className="arrow-icon up" />
                    </button>
                )}
                
                <div className="thumbnails-list">
                    {visibleImages.map((image, index) => (
                        <div 
                            key={index} 
                            className={`thumbnail-item ${currentIndex + index === 0 ? 'first' : ''}`}
                        >
                            <img src={image} alt={`Thumbnail ${index + 1}`} />
                        </div>
                    ))}
                </div>

                {currentIndex < totalItems - maxVisibleItems && (
                    <button 
                        className="thumbnail-nav-button down-button"
                        onClick={handleScrollDown}
                    >
                        <img src={arrowIcon} alt="Scroll down" className="arrow-icon down" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default ItemThumbnails; 