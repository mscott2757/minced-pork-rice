import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import HomeBanner from './HomeBanner';
import HomeCategories from './HomeCategories';

class Home extends Component {
  componentDidMount() {
    if (this.props.projects) {
      this.initProjects();
    }
  }

  scrollToProjects = () => {
		scroller.scrollTo('homeCategories', {
			duration: 500,
			delay: 50,
			smooth: true,
		})
  }

  initProjects = () => {
		scroller.scrollTo('homeCategories', {
			duration: 0,
			delay: 0,
			smooth: false,
		})
  }

  render() {
    const { categories, titles } = this.props;
    return (
      <div className='home'>
        <HomeBanner titles={titles} handleScroll={this.scrollToProjects} />
        <HomeCategories categories={categories} />
      </div>
    );
  }
}

export default Home;
