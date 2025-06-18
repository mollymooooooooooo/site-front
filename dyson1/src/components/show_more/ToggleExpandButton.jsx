import React from 'react';
import './toggle_expand_button.css';
import expandIcon from '../../images/icons/expand.svg';

const ToggleExpandButton = ({
  onClick,
  isExpanded,
  expandedText = 'Свернуть',
  collapsedText = 'Показать еще',
  className = ''
}) => (
  <button className={`toggle-expand-button ${className}`} onClick={onClick}>
    <span>{isExpanded ? expandedText : collapsedText}</span>
    <img
      src={expandIcon}
      alt="Toggle"
      className={`toggle-expand-arrow${isExpanded ? ' rotated' : ''}`}
    />
  </button>
);

export default ToggleExpandButton; 