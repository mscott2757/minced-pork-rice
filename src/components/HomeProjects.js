import React from 'react';
import { Element } from 'react-scroll';

const HomeProjects = (props) => {
  return (
    <div className='home-projects-container'>
      <Element name='homeProjects'></Element>
      <div className='home-projects__title'>
        <h2>{"I'm Waverly & I design"}</h2>
        <div className='home-projects__title-blank'></div>
      </div>
    </div>
  );
}

export default HomeProjects;
