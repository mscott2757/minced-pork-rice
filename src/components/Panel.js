import React from 'react';
import { withRouter } from 'react-router-dom'
import { Image } from './utils';

const Panel = ({ thumbImg, title, className, path, history }) => {
  const handleClick = () => {
    history.push(path);
  }

  return (
    <div className={`panel ${className}`} onClick={handleClick}>
      <Image className='panel__thumb' src={thumbImg} />
      <div className='panel__title'>
        <h3>{ title }</h3>
      </div>
    </div>
  );
}

export default withRouter(Panel);
