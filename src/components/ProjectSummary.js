import React from 'react';
import { withRouter } from 'react-router-dom';

const ProjectSummary = ({ imgSrc, className = '', path, history, title, description }) => {
  const handleClick = () => {
    history.push(path);
  }

  return (
    <div className='project-summary' onClick={handleClick}>
      <div className='project-summary__thumb'>
        <img src={imgSrc} alt='' />
      </div>
      <div className='project-summary__body'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default withRouter(ProjectSummary);
