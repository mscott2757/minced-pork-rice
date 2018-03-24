import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import HomeBanner from './HomeBanner';
import HomeCategories from './HomeCategories';

class Home extends Component {
  componentDidMount() {
    if (this.props.shouldScroll) {
      this.scrollToProjects();
    }
  }

  scrollToProjects = () => {
		scroller.scrollTo('homeCategories', {
			duration: 500,
			delay: 50,
			smooth: true,
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
