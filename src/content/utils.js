import React from 'react';
import images from '../images';

export const ProjectImg = ({ src: image }) => {
  if (!(image in images)) {
    throw new Error(`Image '${image}' not found in images/index.js`);
  }
  return (
    <div className='project-body__img'>
      <img src={images[image]} alt=''/>
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
        frameBorder="0"
        allowFullScreen
        src={src}
      >
      </iframe>
    </div>
  );
}
