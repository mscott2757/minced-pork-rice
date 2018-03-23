import React from 'react';
import Panel from './Panel';

const Category = ({ title, projects }) => {
  return (
    <div className='category'>
      <div className='category__title'>
        <h3>Projects</h3>
        <h2>{ title }</h2>
      </div>
      <div className='projects panels'>
        {projects.map((project, index) => <Panel className='project' {...project} key={index} />)}
      </div>
    </div>
  )
}

export default Category;
