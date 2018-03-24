import React from 'react';
import { NavIcon } from './utils';

const icons = [
  { icon: 'linkedin' },
  { icon: 'instagram' },
  { icon: 'paperclip' },
]

const Nav = (props) => {
  return (
    <div className='nav'>
      <ul>
        <li>
          <a className='nav__link' href='/about'>About</a>
        </li>
        <li>
          <a className='nav__link' href='/projects'>Projects</a>
        </li>
        <li>
          <a className='nav__logo' href='/'>wc</a>
        </li>
      </ul>
      <div className='nav__social'>
        {icons.map((iconProps, index) => <NavIcon {...iconProps} key={index} />)}
      </div>
    </div>
  );
}

export default Nav;
