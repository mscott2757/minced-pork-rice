import React from 'react';
import { getImageSrc } from './utils';

const About = ({ title, profileImg, body }) => {
  return (
    <div className='about'>
      <div className='about-title'>
        <h2>{title}</h2>
      </div>
      <div className='about-content'>
        <div className='about-content__profile'>
          <img src={getImageSrc(profileImg)} alt='' />
        </div>
        <div className='about-content__body'>
          {body}
        </div>
      </div>
    </div>
  );
}

export default About;
