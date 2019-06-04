import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import HomeBanner from './HomeBanner';
import Categories from './Categories';
import About from './About';
import { TopProject } from './TopProject';

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
    const {
      about,
      categories,
      home: { title, bannerImg },
      topProjects,
      toggleResume,
      resume,
    } = this.props;
    return (
      <div className={'home' + (resume.visible ? ' home--no-scroll' : '')}  id='home'>
        <HomeBanner
          title={title}
          bannerImg={bannerImg}
          handleScroll={this.scrollToProjects}
        />
        {topProjects.map(project => <TopProject key={project.id} {...project} />)}
        <About {...about} toggleResume={toggleResume} />
      </div>
    );
  }
}

export default Home;
