import React from 'react';
import { Image } from './utils';
import { Element } from 'react-scroll';

const About = ({ title, profileImg, body }) => {
  return (
    <div className='about'>
      <Element name='about'></Element>
      <div className='about-title'>
        <h2>{title}</h2>
      </div>
      <div className='about-content'>
        <Image className='about-content__profile' src={profileImg} />
        <div className='about-content__body'>
          {body}
        </div>
      </div>
    </div>
  );
}

export default About;
