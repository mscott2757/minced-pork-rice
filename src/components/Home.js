import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import HomeBanner from './HomeBanner';
import Categories from './Categories';
import About from './About';

class Home extends Component {
  componentDidMount() {
    if (this.props.section) {
      this.scrollToSection(this.props.section);
    }
  }

  scrollToProjects = () => {
		scroller.scrollTo('homeCategories', {
			duration: 500,
			delay: 50,
			smooth: true,
		})
  }

  scrollToSection = (section) => {
		scroller.scrollTo(section, {
			duration: 0,
			delay: 0,
			smooth: false,
		})

  }

  render() {
    const { about, categories, home, toggleResume } = this.props;
    return (
      <div className='home'>
        <HomeBanner {...home} handleScroll={this.scrollToProjects} />
        <Categories categories={categories} />
        <About {...about} toggleResume={toggleResume} />
      </div>
    );
  }
}

export default Home;
