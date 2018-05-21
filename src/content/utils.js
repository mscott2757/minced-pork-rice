import React from 'react';
import images from '../images';

export const ProjectImg = ({ src }) => {
  return (
    <div className='project-body__img'>
      <img src={images[src]} alt=''/>
    </div>
  );
}

export const Quote = ({ children }) => {
  return (
    <div className='project-body__quote'>
      {children}
    </div>
  );
}

export const Video = ({ src }) => {
  return (
    <div className='project-body__iframe-wrapper'>
      <iframe
        title={src}
        className='project-body__iframe'
        frameborder="0"
        allowfullscreen
        src={src}
      >
      </iframe>
    </div>
  );
}
