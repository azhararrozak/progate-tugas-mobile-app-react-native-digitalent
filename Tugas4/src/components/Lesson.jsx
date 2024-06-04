import React, { useState } from 'react';

const Lesson = ({name, image, introduction}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickLesson = () => {
    setIsModalOpen(true);
  };

  const handleClickClose = () => {
    setIsModalOpen(false);
  };

  let modal;
  if (isModalOpen) {
    modal = (
      <div className='modal'>
        <div className='modal-inner'>
          <div className='modal-header'></div>
          <div className='modal-introduction'>
            <h2>{name}</h2>
            <p>{introduction}</p>
          </div>
          <button
            className='modal-close-btn'
            onClick={handleClickClose}
          >
            Tutup
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='lesson-card'>
      <div
        className='lesson-item'
        onClick={handleClickLesson}
      >
        <p>{name}</p>
        <img src={image} alt={name} />
      </div>
      {modal}
    </div>
  );
};

export default Lesson;
