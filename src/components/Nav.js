import React from 'react';
import { NavIcon } from './utils';

const icons = [
  { icon: 'linkedin' },
  { icon: 'instagram' },
  { icon: 'paperclip' },
]

const links = [
  { className: 'nav__link', text: 'about', path: '/about' },
  { className: 'nav__link', text: 'projects', path: '/projects' },
  { className: 'nav__logo', text: 'wc', path: '/' },
];

const Nav = (props) => {
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
        {icons.map((iconProps, index) => <NavIcon {...iconProps} key={index} />)}
      </div>
    </div>
  );
}

export default Nav;
