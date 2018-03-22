import React from 'react';

export const NavIcon = ({ icon }) => {
  return (
    <div className='nav__icon-container'>
      <i className={`fa fa-${icon} fa-2x`}></i>
    </div>
  );
}

export const HomeBannerTitle = ({ title, type }) => {
  return (
    <div className={`home-banner__title home-banner__title--${type}`}>
      <h1>{title}</h1>
    </div>
  );
}
