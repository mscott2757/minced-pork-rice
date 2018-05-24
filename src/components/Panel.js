import React from 'react';
import { withRouter } from 'react-router-dom'
import images from '../images';

const Panel = ({ imgSrc, title, className, path, history }) => {
  const handleClick = () => {
    history.push(path);
  }

  return (
    <div className={`panel ${className}`} onClick={handleClick}>
      <img src={images[imgSrc]} alt='' />
      <div className='panel__title'>
        <h3>{ title }</h3>
      </div>
    </div>
  );
}

export default withRouter(Panel);
