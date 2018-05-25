import React from 'react';
import { getImageSrc } from './utils';

const Project = ({ title, bannerImg, body, category }) => {
  let banner = null;
  if (bannerImg) {
    banner = (
      <div className='project-banner__img-wrapper'>
        <img src={getImageSrc(bannerImg)} alt='' />
      </div>
    );
  }
  return (
    <div className='project'>
      <div className='project-banner'>
        {banner}
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
