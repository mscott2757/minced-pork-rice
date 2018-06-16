import React, { Component } from 'react';
import { NavIconLink } from './utils';
import NavDropdown from './NavDropdown';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    }
  }

  toggleDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  render() {
    const { icons, categories } = this.props;
    return (
      <div className='nav-wrapper'>
        <div className='nav'>
          <ul className='nav__links'>
            <li>
              <a className='nav__link' href='/about'>about</a>
            </li>
            <li onMouseEnter={this.toggleDropdown} onMouseLeave={this.toggleDropdown}>
              <a className='nav__link' href='/projects'>projects</a>
              <NavDropdown visible={this.state.showDropdown} categories={categories} />
            </li>
            <li>
              <a className='nav__logo' href='/'>wc</a>
            </li>
          </ul>
          <div className='nav__social'>
            {icons.map((iconProps, index) => <NavIconLink {...iconProps} key={index} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
