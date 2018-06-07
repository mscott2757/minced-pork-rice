import React from 'react';
import { NavIconLink } from './utils';

const Nav = ({ icons, links }) => {
  return (
    <div className='nav'>
      <ul>
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
