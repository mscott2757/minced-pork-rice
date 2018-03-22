import React from 'react';
import { HomeBannerTitle } from './utils';

const titles = [
  { title: "I'm Waverly", type: 'name' },
  { title: "& I design", type: 'design' },
  { title: "creative", type: 'creative' },
  { title: "workshops", type: 'workshops' },
];

const HomeBanner = (props) => {
  return (
    <div className='home-banner'>
      {titles.map((titleProps, index) => <HomeBannerTitle {...titleProps} key={index} />)}
      <div className='home-banner__caret'>
        <i className='fa fa-caret-down fa-3x'></i>
      </div>
    </div>
  )
}

export default HomeBanner;
