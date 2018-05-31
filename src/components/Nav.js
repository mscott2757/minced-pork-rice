import React from 'react';
import { NavIconLink } from './utils';

const Nav = ({ handleToggleResume, icons, links }) => {
  const toggleResume = (e) => {
    e.preventDefault();
    handleToggleResume();
  }
  return (
    <div className='nav'>
      <ul>
        <li>
          <a onClick={toggleResume} href='/toggle-resume' className='nav__link'>resume</a>
        </li>
        {links.map(({className, path, text }) => {
          return (
            <li key={text}>
              <a className={className} href={path}>{text}</a>
            </li>
          );
        })}
      </ul>
      <div className='nav__social'>
        {icons.map((iconProps, index) => <NavIconLink {...iconProps} key={index} />)}
      </div>
    </div>
  );
}

export default Nav;
