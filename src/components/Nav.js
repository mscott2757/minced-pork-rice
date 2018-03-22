import React from 'react';

const Nav = (props) => {
  return (
    <div className='nav'>
      <div className='nav__name'>
        <p>Waverly Chao</p>
      </div>
      <div className='nav__social'>
        <div className='nav__icon-container'>
          <i className='fa fa-linkedin fa-2x'></i>
        </div>
        <div className='nav__icon-container'>
          <i className='fa fa-instagram fa-2x'></i>
        </div>
        <div className='nav__icon-container'>
          <i className='fa fa-paperclip fa-2x'></i>
        </div>
      </div>
    </div>
  );
}

export default Nav;
