import React from 'react';

const Project = ({ title, imgSrc, body, category }) => {
  return (
    <div className='project'>
      <div className='project-banner'>
        <div className='project-banner__title'>
          <a href={`/${category.id}`}>
            <h2 className='project-banner__category'>{category.title}</h2>
          </a>
          <h2>/</h2>
          <h2>{title}</h2>
        </div>
        {body}
      </div>
    </div>
  );
}

export default Project;
