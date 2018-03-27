import React from 'react';
import { NavIconLink } from './utils';

const icons = [
  { icon: 'linkedin', path: 'https://www.linkedin.com/in/waverlychao/' },
  { icon: 'instagram', path: 'https://www.instagram.com/ibelieveinwaves/' },
]

const links = [
  { className: 'nav__link', text: 'about', path: '/about' },
  { className: 'nav__link', text: 'projects', path: '/projects' },
  { className: 'nav__logo', text: 'wc', path: '/' },
];

const Nav = ({ handleToggleResume }) => {
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
