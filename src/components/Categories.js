import React from 'react';
import Panel from './Panel';

const Categories = ({ categories }) => {
  return (
    <div className='categories'>
      <div className='categories__title'>
        <h2>Projects</h2>
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
