import React from 'react';
import { Image } from './utils';
import { Element } from 'react-scroll';

const About = ({ title, profileImg, body, toggleResume }) => {
  const handleToggleResume= (e) => {
    e.preventDefault();
    toggleResume();
  }

  return (
    <div className='about'>
      <Element name='about'></Element>
      <div className='about-title'>
        <h2>{title}</h2>
      </div>
      <div className='about-content'>
        <div className='about-profile'>
          <Image className='about-profile__picture' src={profileImg} />
          <a onClick={handleToggleResume} className='about-profile__resume-link' href='/show-resume'>RESUME</a>
        </div>
        <div className='about-body'>
          {body}
        </div>
      </div>
    </div>
  );
}

export default About;
