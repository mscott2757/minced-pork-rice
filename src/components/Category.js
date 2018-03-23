import React from 'react';
import Panel from './Panel';

const Category = ({ title, projects, id }) => {
  const getProjectPath = (project) => {
    return `/categories/${id}/${project.id}`;
  }

  return (
    <div className='category'>
      <div className='category__title'>
        <h3>Projects</h3>
        <h2>{ title }</h2>
      </div>
      <div className='projects panels'>
        {projects.map((project, index) => {
          return <Panel className='project' {...project} path={getProjectPath(project)} key={project.id} />;
        })}
      </div>
    </div>
  )
}

export default Category;
