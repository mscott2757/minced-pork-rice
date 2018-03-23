import React from 'react';
import { Element } from 'react-scroll';
import Panel from './Panel';

const HomeCategories = ({ categories }) => {
  return (
    <div className='home-categories-container'>
      <Element name='homeCategories'></Element>
      <div className='home-categories__title'>
        <h2>{"I'm Waverly & I design"}</h2>
        <div className='home-categories__title-blank'></div>
      </div>
      <div className='home-categories panels'>
        {categories.map((category, index) => <Panel className='home-category' {...category} key={index} />)}
      </div>
    </div>
  );
}

export default HomeCategories;
