import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import HomeBanner from './HomeBanner';
import HomeProjects from './HomeProjects';

class Home extends Component {
  scrollToProjects = () => {
		scroller.scrollTo('homeProjects', {
			duration: 500,
			delay: 50,
			smooth: true,
		})
  }

  render() {
    return (
      <div className='home'>
        <HomeBanner handleScroll={this.scrollToProjects} />
        <HomeProjects />
      </div>
    );
  }
}

export default Home;
