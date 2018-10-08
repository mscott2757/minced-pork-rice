import React from 'react';
import { Element } from 'react-scroll';
import Panel from './Panel';

const Categories = ({ categories }) => {
  return (
    <div className='categories'>
      <Element name='categories'></Element>
      <div className='categories__title'>
        <h2>{"Check out my "}</h2>
        <div className='categories__title--blank'></div>
      </div>
      <div className='categories__body panels'>
        {categories.map((category, index) => {
          let { id } = category;
          return <Panel className='category' {...category} key={id} path={`/${id}`} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
