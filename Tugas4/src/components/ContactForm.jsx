import React, { useState } from 'react';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [hasEmailError, setHasEmailError] = useState(false);
  const [content, setContent] = useState('');
  const [hasContentError, setHasContentError] = useState(false);

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    setEmail(inputValue);
    setHasEmailError(isEmpty);
  };

  const handleContentChange = (event) => {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    setContent(inputValue);
    setHasContentError(isEmpty);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '' || content === '') {
      setHasEmailError(email === '');
      setHasContentError(content === '');
    } else {
      setIsSubmitted(true);
    }
  };

  let emailErrorText;
  if (hasEmailError) {
    emailErrorText = (
      <p className='contact-message-error'>
        Masukkan alamat email Anda
      </p>
    );
  }

  let contentErrorText;
  if (hasContentError) {
    contentErrorText = (
      <p className='contact-message-error'>
        Masukkan pesan Anda
      </p>
    );
  }

  let contactForm;
  if (isSubmitted) {
    contactForm = (
      <div className='contact-submit-message'>
        Pesan Terkirim
      </div>
    );
  } else {
    contactForm = (
      <form onSubmit={handleSubmit}>
        <p>Alamat Email (wajib diisi)</p>
        <input
          value={email}
          onChange={handleEmailChange}
        />
        {emailErrorText}
        <p>Pesan (wajib diisi)</p>
        <textarea
          value={content}
          onChange={handleContentChange}
        />
        {contentErrorText}
        <input
          type='submit'
          value='Kirim'
        />
      </form>
    );
  }

  return (
    <div className='contact-form'>
      {contactForm}
    </div>
  );
};

export default ContactForm;
