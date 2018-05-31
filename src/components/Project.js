import React from 'react';
import { Image } from './utils';

const Project = ({ title, bannerImg, body, category }) => {
  let banner = null;
  if (bannerImg) {
    banner = <Image className='project-banner__img-wrapper' src={bannerImg} />;
  }
  return (
    <div className='project'>
      <div className='project-banner'>
        {banner}
        <div className='project-banner__title'>
          <div className='project-banner__category'>
            <a href={`/${category.id}`}>
              <h3>{category.title}</h3>
            </a>
          </div>
          <div className='project-banner__name'>
            <h2>{title}</h2>
          </div>
        </div>
      </div>
      <div className='project-body'>
        {body}
      </div>
    </div>
  );
}

export default Project;
