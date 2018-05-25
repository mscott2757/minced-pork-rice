import React from 'react';
import { withRouter } from 'react-router-dom';
import { getImage } from './utils';

const ProjectSummary = ({ thumbImg, className = '', path, history, title, description, externalLink }) => {
  const handleClick = () => {
    if (externalLink) {
      window.open(externalLink, '_blank');
    } else {
      history.push(path);
    }
  }

  console.log(path);

  return (
    <div className='project-summary' onClick={handleClick}>
      <div className='project-summary__thumb'>
        <img src={getImage(thumbImg)} alt='' />
      </div>
      <div className='project-summary__body'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default withRouter(ProjectSummary);
