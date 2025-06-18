import React, { useState } from 'react';
import openContentIcon from '../../images/icons/open-content.svg';
import openedContentIcon from '../../images/icons/opened-content.svg';

const FAQRow = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-row" onClick={toggleOpen}>
      <div className="faq-question">
        <p>{question}</p>
        <img 
          src={isOpen ? openedContentIcon : openContentIcon} 
          alt="Toggle FAQ" 
          className={`faq-toggle ${isOpen ? 'open' : ''}`}
        />
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQRow; 