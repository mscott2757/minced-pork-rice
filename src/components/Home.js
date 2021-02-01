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
		scroller.scrollTo('categories', {
      containerId: 'home',
			duration: 350,
			delay: 50,
			smooth: true,
		})
  }

  scrollToSection = (section) => {
		scroller.scrollTo(section, {
      containerId: 'home',
			duration: 0,
			delay: 0,
			smooth: false,
		})

  }

  render() {
    const { about, categories, home, toggleResume, resume } = this.props;
    return (
      <div className={'home' + (resume.visible ? ' home--no-scroll' : '')}  id='home'>
        <HomeBanner {...home} handleScroll={this.scrollToProjects} />
        <Categories categories={categories} />
        <About {...about} toggleResume={toggleResume} />
      </div>
    );
  }
}

export default Home;
