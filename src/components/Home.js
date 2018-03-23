import React from 'react';
import { scroller } from 'react-scroll';
import HomeBanner from './HomeBanner';
import HomeCategories from './HomeCategories';

const Home = ({ categories, titles }) => {
  const scrollToProjects = () => {
		scroller.scrollTo('homeCategories', {
			duration: 500,
			delay: 50,
			smooth: true,
		})
  }

  return (
    <div className='home'>
      <HomeBanner titles={titles} handleScroll={scrollToProjects} />
      <HomeCategories categories={categories} />
    </div>
  );
}

export default Home;
