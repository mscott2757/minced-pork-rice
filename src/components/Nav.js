import React from 'react';
import { NavIconLink } from './utils';

const Nav = ({ handleToggleResume, icons, links }) => {
  return (
    <div className='nav'>
      <ul>
        {links.map(({className, path, text }) => {
          return <li key={path}>
            <a className={className} href={path}>{text}</a>
          </li>;
        })}
      </ul>
      <div className='nav__social'>
        {icons.map((iconProps, index) => <NavIconLink {...iconProps} key={index} />)}
        <div className='nav__icon-container' onClick={handleToggleResume}>
          <i className={`fa fa-paperclip fa-lg`}></i>
        </div>
      </div>
    </div>
  );
}

export default Nav;
