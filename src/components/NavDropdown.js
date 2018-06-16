import React from 'react';

const NavDropdown = ({ visible, categories }) => {
  return (
      <ul className={'nav__dropdown' + (visible ? ' nav__dropdown--show' : '')}>
        {categories.map(({ title, id }) => {
          return <li key={id}>
            <a href={`/${id}`}>{title}</a>
          </li>

        })}
      </ul>
  );
}

export default NavDropdown;
