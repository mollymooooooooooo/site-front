import React, { useState } from 'react';
import doneIcon from '../../images/icons/done.svg'; // Импортируем иконку
import './contact_subscription.css';

const ContactSubscription = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const [privacyError, setPrivacyError] = useState('');

  // For Contact Form
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [phone, setPhone] = useState('+7 ');
  const [phoneError, setPhoneError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(''); // Clear error when typing
  };

  const handlePrivacyChange = (e) => {
    setPrivacyPolicyAccepted(e.target.checked);
    if (privacyError) setPrivacyError(''); // Clear error when checking
  };

  // Contact form handlers
  const handleNameChange = (e) => {
    setName(e.target.value);
    if (nameError) setNameError('');
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const previousValue = phone;

    // Если ввод пуст или не начинается с '+7 ', сбрасываем до '+7 '
    if (!input || !input.startsWith('+7 ')) {
      setPhone('+7 ');
      e.target.setSelectionRange(4, 4); // Устанавливаем курсор после '+7 '
      return;
    }

    // Извлекаем только цифры из ввода
    let digits = input.substring(3).replace(/\D/g, ''); // Получаем цифры после '+7 '

    // Ограничиваем до 10 цифр
    digits = digits.substring(0, 10);

    const newPhone = '+7 ' + digits;
    setPhone(newPhone);

    // Корректировка позиции курсора
    setTimeout(() => {
      const newCursorPosition = input.length < previousValue.length ? e.target.selectionStart : newPhone.length;
      e.target.setSelectionRange(newCursorPosition, newCursorPosition);
    }, 0);

    if (phoneError) setPhoneError('');
  };

  const handleKeyDown = (e) => {
    const cursorPosition = e.target.selectionStart;
    const value = e.target.value;

    // Запрещаем удаление '+7 '
    if (e.key === 'Backspace' && cursorPosition <= 3) {
      e.preventDefault();
      return;
    }

    if (e.key === 'Delete' && cursorPosition <= 3) {
      e.preventDefault();
      return;
    }

    // Перемещаем курсор только после '+7 '
    if (e.key === 'ArrowLeft' && cursorPosition <= 4) {
      e.preventDefault();
      e.target.setSelectionRange(4, 4);
      return;
    }

    if (e.key === 'Home') {
      e.preventDefault();
      e.target.setSelectionRange(4, 4); // Позиция после '+7 '
    }

    if (e.key === 'End') {
      e.preventDefault();
      e.target.setSelectionRange(value.length, value.length);
    }
  };

  const handleClick = (e) => {
    const cursorPosition = e.target.selectionStart;
    if (cursorPosition < 4) {
      e.target.setSelectionRange(4, 4); // Сразу после '+7 '
    }
  };

  const handlePhoneBlur = () => {
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 11) { // 11 цифр, включая 7 из +7
      setPhoneError('Введите полный номер телефона');
    } else {
      setPhoneError('');
    }
  };

  const handleSubscriptionSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    // Validate email
    if (!email) {
      setEmailError('Поле E-mail не может быть пустым.');
      valid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setEmailError('Пожалуйста, введите корректный E-mail.');
      valid = false;
    } else {
      setEmailError('');
    }

    // Validate privacy policy checkbox
    if (!privacyPolicyAccepted) {
      setPrivacyError('Необходимо согласиться с политикой конфиденциальности.');
      valid = false;
    } else {
      setPrivacyError('');
    }

    if (valid) {
      alert('Вы успешно подписались!');
      setEmail('');
      setPrivacyPolicyAccepted(false);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!name.trim()) {
      setNameError('Поле Ваше имя не может быть пустым.');
      valid = false;
    } else {
      setNameError('');
    }

    const digits = phone.replace(/\D/g, '');
    if (digits.length < 11) { // 11 цифр, включая 7 из +7
      setPhoneError('Введите полный номер телефона');
      valid = false;
    } else {
      setPhoneError('');
    }

    if (valid) {
      console.log('Contact form submitted:', { name, phone });
      alert('Ваша заявка успешно отправлена!');
      setName('');
      setPhone('+7 '); // Сброс до '+7 '
    }
  };

  return (
    <section className="contact-subscription-section">
      <div className="container">
        <div className="contact-subscription-content">
          <div className="contact-form-wrapper">
            <h2 className="contact-subscription-title">Свяжитесь с нами</h2>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <p><input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="form-input"
                  value={name}
                  onChange={handleNameChange}
                /></p>
                {nameError && <p className="error-message">{nameError}</p>}
              </div>
              <div className="form-group">
                <p><input 
                  type="tel" 
                  placeholder="Ваш номер телефона" 
                  className="form-input"
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={handlePhoneBlur}
                  onKeyDown={handleKeyDown}
                  onClick={handleClick}
                  maxLength="13" // +7 и 10 цифр = 13 символов
                /></p>
                {phoneError && <p className="error-message">{phoneError}</p>}
              </div>
              <button type="submit" className="submit-button"><p>Оставить заявку</p></button>
            </form>
          </div>

          <div className="subscription-form-wrapper">
            <h2 className="contact-subscription-title">Подпишитесь на новости</h2>
            <form className="subscription-form" onSubmit={handleSubscriptionSubmit}>
              <div className="form-group">
                <p><input 
                  type="email" 
                  placeholder="Ваш e-mail" 
                  className="form-input"
                  value={email}
                  onChange={handleEmailChange}
                /></p>
                {emailError && <p className="error-message">{emailError}</p>}
              </div>
              <button type="submit" className="subscribe-button"><p>Подписаться</p></button>
              <div className="privacy-policy">
                <div 
                  className="privacy-policy-checkbox"
                  onClick={() => {
                    setPrivacyPolicyAccepted(!privacyPolicyAccepted);
                  }}
                >
                  <div className="custom-checkbox">
                    {privacyPolicyAccepted && <img src={doneIcon} alt="checked" />}
                  </div>
                  <label><p>Я ознакомлен(а) с политикой конфиденциальности и согласен(а) с обработкой персональных данных</p></label>
                </div>
                {privacyError && <p className="error-message">{privacyError}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSubscription; 