import React, { useState, useEffect } from 'react';
import './photo_window.css';
import closeIcon from '../../images/icons/close.svg';
import rightArrowIcon from '../../images/icons/photo_right.svg';

const PhotoWindow = ({ isOpen, onClose, images, initialIndex, review }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex, images]);

    if (!isOpen || !images || images.length === 0) {
        return null;
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const currentImageSrc = images[currentIndex];

    return (
        <div className="photo-modal-overlay" onClick={onClose}>
            <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="photo-modal-header">
                    <span className="photo-counter">{currentIndex + 1} / {images.length}</span>
                    <button className="photo-close-btn" onClick={onClose}>
                        <img src={closeIcon} alt="Close" />
                    </button>
                </div>
                <div className="photo-display-area">
                    <button className="photo-nav-btn photo-prev-btn" onClick={handlePrev} aria-label="Предыдущее фото">
                        <img src={rightArrowIcon} alt="Previous" className="arrow-icon rotated" />
                    </button>
                    <img src={currentImageSrc} alt={`Image ${currentIndex + 1}`} className="photo-main-image" />
                    <button className="photo-nav-btn photo-next-btn" onClick={handleNext} aria-label="Следующее фото">
                        <img src={rightArrowIcon} alt="Next" className="arrow-icon" />
                    </button>
                </div>
                {review && (
                    <div className="photo-review-details photo-review-details-bottom">
                        <span className="photo-review-author">{review.name}</span>
                        <p className="photo-review-text">{review.text}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PhotoWindow; 