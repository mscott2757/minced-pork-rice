import React from 'react';
import Panel from './Panel';
import ProjectSummary from './ProjectSummary';

const Category = ({ title, projects, id }) => {
  const getPath = (project) => {
    return `/${id}/${project.id}`;
  }

  return (
    <div className='category'>
      <div className='category__title'>
        <h3>Projects</h3>
        <h2>{title}</h2>
      </div>
      <div className='projects panels'>
        {projects.map((project, index) => {
          // change to key to id later...
          return <Panel className='project' {...project} path={getPath(project)} key={index} />;
        })}
      </div>
    </div>
  )
}

export default Category;
