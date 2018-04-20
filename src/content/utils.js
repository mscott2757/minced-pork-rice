import React from 'react';
import images from '../images';

export const ProjectImg = ({ src }) => {
  return (
    <div className='project-body__img'>
      <img src={images[src]} alt=''/>
    </div>
  );
}
