import React, { useState, useRef } from 'react';
import './review_window.css';
import starIconFilled from '../../images/icons/star.svg';
import starIconEmpty from '../../images/icons/empty_star.svg';
import closeIcon from '../../images/icons/close.svg';

const ReviewWindow = ({ isOpen, onClose, addReview, initialRating = 0 }) => {
    const [rating, setRating] = useState(initialRating);
    const [selectedImages, setSelectedImages] = useState([]);
    const fileInputRef = useRef(null);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState({});
    const [isDragActive, setIsDragActive] = useState(false);

    // Reset form when modal opens with new initialRating
    React.useEffect(() => {
        if (isOpen) {
            setRating(initialRating);
            setSelectedImages([]);
        }
    }, [isOpen, initialRating]);

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <img
                    key={i}
                    src={i <= rating ? starIconFilled : starIconEmpty}
                    alt="Star"
                    className="review-star-icon"
                    onClick={() => setRating(i)}
                />
            );
        }
        return stars;
    };

    const handleImageUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const imagePromises = files.map(file => {
            return new Promise((resolve, reject) => {
                if (file && file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        resolve(reader.result);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                } else {
                    resolve(null);
                }
            });
        });
        Promise.all(imagePromises).then(images => {
            setSelectedImages(images.filter(Boolean));
        });
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragActive(false);
        const files = Array.from(event.dataTransfer.files);
        const imagePromises = files.map(file => {
            return new Promise((resolve, reject) => {
                if (file && file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        resolve(reader.result);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                } else {
                    resolve(null);
                }
            });
        });
        Promise.all(imagePromises).then(images => {
            setSelectedImages(images.filter(Boolean));
        });
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragActive(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragActive(false);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!name.trim()) {
            newErrors.name = 'Имя не может быть пустым';
        } else if (name.length > 10) {
            newErrors.name = 'Имя не должно превышать 10 символов';
        }
        if (rating === 0) {
            newErrors.rating = 'Пожалуйста, поставьте оценку';
        }
        if (!comment.trim()) {
            newErrors.comment = 'Комментарий не может быть пустым';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        if (value.length <= 10) {
            setName(value);
        }
    };

    const handleSubmit = () => {
        if (validateForm()) {
            const commentLines = comment.trim().split('\n');
            const title = commentLines[0];
            const remainingText = commentLines.slice(1).join('\n').trim();

            const newReview = {
                id: Date.now(), // Простой уникальный ID
                name: name.trim(),
                date: new Date().toLocaleDateString('en-GB'), // Формат даты dd/mm/yyyy
                rating: rating,
                title: title,
                text: remainingText,
                photos: selectedImages,
            };
            addReview(newReview);
            onClose(); // Закрыть модальное окно после успешной отправки
            // Сбросить состояние формы после отправки
            setName('');
            setRating(0);
            setComment('');
            setSelectedImages([]);
            setErrors({});
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="review-modal-overlay" onClick={onClose}>
            <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="review-modal-close-btn" onClick={onClose}>
                    <img src={closeIcon} alt="Close" />
                </button>
                <h2 className="review-modal-title">Написать отзыв</h2>

                <div className="review-rating-section">
                    <p className="review-rating-label">Оценка</p>
                    <div className="review-stars-interactive">
                        {renderStars()}
                    </div>
                    {errors.rating && <p className="review-error-message">{errors.rating}</p>}
                </div>

                <div className="review-form-group">
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        className={`review-input ${errors.name ? 'input-error' : ''}`}
                        value={name}
                        onChange={handleNameChange}
                        maxLength={10}
                    />
                    {errors.name && <p className="review-error-message">{errors.name}</p>}
                </div>

                <div className="review-form-group">
                    <textarea
                        placeholder="Комментарий"
                        className={`review-textarea ${errors.comment ? 'input-error' : ''}`}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    {errors.comment && <p className="review-error-message">{errors.comment}</p>}
                </div>

                <div 
                    className={`review-photo-upload-section${isDragActive ? ' drag-active' : ''}`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                >
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        multiple
                    />
                    <p className="review-photo-upload-link" onClick={handleImageUploadClick}>Загрузить фото</p>
                    {selectedImages.length > 0 ? (
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {selectedImages.map((img, idx) => (
                                <img key={idx} src={img} alt={`Selected ${idx+1}`} className="review-preview-image" />
                            ))}
                        </div>
                    ) : (
                        <p className="review-photo-upload-hint">Нажмите кнопку "Загрузить фото" или перетащите фотографии в эту область</p>
                    )}
                </div>

                <button className="review-submit-btn" onClick={handleSubmit}>Отправить отзыв</button>
            </div>
        </div>
    );
};

export default ReviewWindow; 