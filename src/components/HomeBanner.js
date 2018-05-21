import React from 'react';
import { HomeBannerTitle } from './utils';

const HomeBanner = ({ handleScroll, titles, imgSrc }) => {
  let homeBannerImg = null;
  if (imgSrc) {
    homeBannerImg = (
      <div className='home-banner-img'>
        <img src={imgSrc} alt='' />
      </div>
    )
  }

  return (
    <div className='home-banner-wrapper'>
      {homeBannerImg}
      <div className='home-banner'>
        {titles.map((titleProps, index) => <HomeBannerTitle {...titleProps} key={index} />)}
        <div className='home-banner__caret'>
          <button onClick={handleScroll}>
            <i className='fa fa-caret-down fa-3x'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner;
