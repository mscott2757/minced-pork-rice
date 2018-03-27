import React from 'react';

export const NavIconLink = ({ icon, path }) => {
  return (
    <div className='nav__icon-container'>
      <a href={path}>
        <i className={`fa fa-${icon} fa-lg`}></i>
      </a>
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
