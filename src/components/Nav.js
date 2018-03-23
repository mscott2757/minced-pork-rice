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
      <div className='nav__name'>
        <a href='/'>
          <p>waverly chao</p>
        </a>
      </div>
      <div className='nav__social'>
        {icons.map((iconProps, index) => <NavIcon {...iconProps} key={index} />)}
      </div>
    </div>
  );
}

export default Nav;
