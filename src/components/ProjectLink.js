import React from 'react';
import { withRouter } from 'react-router-dom'

const ProjectLink = ({ path, history, project, type }) => {
  if (!project || 'externalLink' in project) {
    return <div className='project-footer__link-wrapper'></div>;
  }
  const handleClick = () => {
    history.push(path);
  }
  let title = type === 'next' ? 'Next' : 'Previous';
  return (
    <div onClick={handleClick} className='project-footer__link'>
       <p>{`${title} project:`}</p>
       <p>{project.title}</p>
    </div>
  );
}

export default withRouter(ProjectLink);
