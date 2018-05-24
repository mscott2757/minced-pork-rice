import React from 'react';
import { withRouter } from 'react-router-dom'
import { getImage } from './utils';

const Panel = ({ imgSrc, title, className, path, history }) => {
  const handleClick = () => {
    history.push(path);
  }

  return (
    <div className={`panel ${className}`} onClick={handleClick}>
      <img src={getImage(imgSrc)} alt='' />
      <div className='panel__title'>
        <h3>{ title }</h3>
      </div>
    </div>
  );
}

export default withRouter(Panel);
