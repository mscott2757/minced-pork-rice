import React from 'react';

const Panel = ({ imgSrc, lines, className }) => {
  return (
    <div className={`panel ${className}`}>
      <img src={imgSrc} alt='' />
      <div className='panel__title'>
        {lines.map((line, index) => <h3 key={index}>{ line }</h3>)}
      </div>
    </div>
  );
}

export default Panel;
