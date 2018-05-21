import React from 'react';
import images from '../images';

const Project = ({ title, imgSrc, body, category }) => {
  let bannerImg = null;
  if (imgSrc) {
    bannerImg = (
      <div className='project-banner__img-wrapper'>
        <img src={images[imgSrc]} alt='' />
      </div>
    );
  }
  return (
    <div className='project'>
      <div className='project-banner'>
        {bannerImg}
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
