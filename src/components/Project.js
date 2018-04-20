import React from 'react';

const Project = ({ title, imgSrc, body, category }) => {
  return (
    <div className='project'>
      <div className='project-banner'>
        <div className='project-banner__title'>
          <a href={`/${category.id}`}>
            <h3 className='project-banner__category'>{category.title}</h3>
          </a>
          <h2>{title}</h2>
        </div>
      </div>
      <div className='project-body'>
        {body}
      </div>
    </div>
  );
}

export default Project;