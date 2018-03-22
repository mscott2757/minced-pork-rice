import React from 'react';
import { HomeBannerTitle } from './utils';

const titles = [
  { title: "I'm Waverly", type: 'name' },
  { title: "& I design", type: 'design' },
  { title: "creative", type: 'creative' },
  { title: "workshops", type: 'workshops' },
];

const HomeBanner = ({ handleScroll }) => {
  return (
    <div className='home-banner'>
      {titles.map((titleProps, index) => <HomeBannerTitle {...titleProps} key={index} />)}
      <div className='home-banner__caret'>
        <button onClick={handleScroll}>
          <i className='fa fa-caret-down fa-3x'></i>
        </button>
      </div>
    </div>
  )
}

export default HomeBanner;
