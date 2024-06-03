import React from 'react'

const Language = ({name, image}) => {
  return (
    <div className='language-item'>
        <div className='language-name'>{name}</div>
        <img src={image} alt={name} />
      </div>
  )
}

export default Language