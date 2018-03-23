import React from 'react';
import { withRouter } from 'react-router-dom'

const Panel = ({ imgSrc, lines, className, path, history }) => {
  const handleClick = () => {
    history.push(path);
  }

  return (
    <div className={`panel ${className}`} onClick={handleClick}>
      <img src={imgSrc} alt='' />
      <div className='panel__title'>
        {lines.map((line, index) => <h3 key={index}>{ line }</h3>)}
      </div>
    </div>
  );
}

export default withRouter(Panel);
