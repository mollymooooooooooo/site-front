import React, { useState } from 'react';
import './reviews.css';
import starIcon from '../../images/icons/star.svg';
import ToggleExpandButton from '../../components/show_more/ToggleExpandButton.jsx';
import ReviewWindow from '../review_window/ReviewWindow.jsx';
import reviewImage1 from '../../images/reviews_images/review1.png';
import PhotoWindow from '../photo_window/PhotoWindow.jsx';

const initialReviews = [
  {
    id: 1,
    name: 'Ольга',
    date: '21/05/2022',
    rating: 5,
    title: 'Это лучший фен!',
    text: 'Пользуюсь около месяца, хочу поделиться впечатлениями. Во-первых, фен очень легкий, удобно лежит в руке, не скользит. Кнопка включения и выключения расположена удобно, а не где-то сбоку. Мощность у фена хорошая, волосы сушит быстро',
    photos: [
      reviewImage1,
      reviewImage1,
      reviewImage1
    ]
  },
  {
    id: 2,
    name: 'Татьяна',
    date: '21/05/2022',
    rating: 5,
    title: 'Отличный фен',
    text: 'Фен очень понравился. Качественный, стильный: свою цену полностью оправдывает!',
    photos: []
  },
  {
    id: 3,
    name: 'Виктор',
    date: '21/05/2022',
    rating: 5,
    title: 'Быстро пришел',
    text: 'Фен очень понравился. Качественный, стильный: свою цену полностью оправдывает!',
    photos: [reviewImage1, reviewImage1]
  }
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [visibleReviews, setVisibleReviews] = useState(2);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [photosForModal, setPhotosForModal] = useState([]);
  const [initialPhotoIndex, setInitialPhotoIndex] = useState(0);
  const [reviewForModal, setReviewForModal] = useState(null);
  const [selectedRating, setSelectedRating] = useState(5);

  const handleShowMore = () => {
    if (isExpanded) {
      setVisibleReviews(2);
    } else {
      setVisibleReviews(reviews.length);
    }
    setIsExpanded(!isExpanded);
  };

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const renderInteractiveStars = () => (
    <div className="reviews-stars">
      {Array(5).fill(0).map((_, index) => (
        <img
          key={index}
          src={starIcon}
          alt="star"
          className={`star-icon ${index < selectedRating ? 'active' : 'inactive'}`}
          style={{ cursor: 'pointer' }}
          onClick={() => handleStarClick(index + 1)}
        />
      ))}
    </div>
  );

  const renderStars = (rating) => (
    <div className="reviews-stars">
      {Array(5).fill(0).map((_, index) => (
        <img
          key={index}
          src={starIcon}
          alt="star"
          className={`star-icon ${index < rating ? 'active' : 'inactive'}`}
        />
      ))}
    </div>
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openPhotoModal = (review, index) => {
    setReviewForModal(review);
    setPhotosForModal(review.photos);
    setInitialPhotoIndex(index);
    setIsPhotoModalOpen(true);
  };

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false);
    setPhotosForModal([]);
    setInitialPhotoIndex(0);
    setReviewForModal(null);
  };

  const addReview = (newReview) => {
    setReviews(prevReviews => [newReview, ...prevReviews]);
    if (!isExpanded && visibleReviews === 2) {
        setVisibleReviews(prev => prev + 1);
    }
  };

  return (
    <section className="reviews-section">
      <div className="container">
        <div className='reviews-content'>
          <div className="reviews-header">
            <h2 className="reviews-title">Отзывы <span className="reviews-title__count">{reviews.length}</span></h2>
            <div className="reviews-header__row">
              <div className="reviews-rating-block">
              </div>
            </div>
          </div>
          <div className="review-item-rate">
            <div className="review-item__left-panel">
              <div className="review-item__name-rating-group">
                <span className="review-item__name"><span className='bignum'>{selectedRating}</span> / 5</span>
                <div className="review-item__stars review-item__stars--top">
                  {renderInteractiveStars()}
                </div>
              </div>
            </div>
            <div className="review-item__main-content">
              <button className="reviews-write-btn" onClick={openModal}>Написать отзыв</button>
            </div>
          </div>
          <div className="reviews-list">
            {reviews.slice(0, visibleReviews).map(review => (
              <div className="review-item" key={review.id}>
                <div className="review-item__left-panel">
                  <div className="review-item__name-rating-group">
                    <span className="review-item__name">{review.name}</span>
                    <div className="review-item__stars review-item__stars--top">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <div className="review-item__main-content">
                  <span className="review-item__title">{review.title}</span>
                  <div className="review-item__text">{review.text}</div>
                  {review.photos.length > 0 && (
                    <>
                      <div className="review-item__photos">
                        {review.photos.map((photo, idx) => (
                          <img
                            src={photo}
                            alt="Фото отзыва"
                            key={idx}
                            className="review-photo"
                            onClick={() => openPhotoModal(review, idx)}
                          />
                        ))}
                      </div>
                      <button
                        type="button"
                        className="review-item__photos-link"
                        onClick={() => openPhotoModal(review, 0)}
                      >
                        Смотреть все фото
                      </button>
                    </>
                  )}
                </div>
                <span className="review-item__date">{review.date}</span>
              </div>
            ))}
          </div>
          {reviews.length > 2 && (
            <div className="reviews-footer">
              <ToggleExpandButton
                onClick={handleShowMore}
                isExpanded={isExpanded}
              />
            </div>
          )}
        </div>
      </div>
      <ReviewWindow
        isOpen={isModalOpen}
        onClose={closeModal}
        addReview={addReview}
        initialRating={selectedRating}
      />
      <PhotoWindow
        isOpen={isPhotoModalOpen}
        onClose={closePhotoModal}
        images={photosForModal}
        initialIndex={initialPhotoIndex}
        review={reviewForModal}
      />
    </section>
  );
};

export default Reviews;