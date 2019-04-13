import React from 'react';
import { Image } from './utils';
import ProjectLink from './ProjectLink';

const Project = ({
  title,
  bannerImg,
  body,
  category,
  nextProject,
  prevProject,
}) => {
  let getPath = (project) => project ? `/${category.id}/${project.id}`: null;
  let banner = bannerImg ? <Image className='project-banner__img-wrapper' src={bannerImg} /> : null;
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
      <div className='project-footer'>
        <ProjectLink project={prevProject} type='prev' path={getPath(prevProject)} />
        <ProjectLink project={nextProject} type='next' path={getPath(nextProject)} />
      </div>
    </div>
  );
}

export default Project;
