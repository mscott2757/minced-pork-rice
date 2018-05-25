import React from 'react';
import { HomeBannerTitle } from './utils';
import { getImageSrc } from './utils';

const HomeBanner = ({ handleScroll, titles, bannerImg }) => {
  let homeBanner = null;
  if (bannerImg) {
    homeBanner = (
      <div className='home-banner-img'>
        <img src={getImageSrc(bannerImg)} alt='' />
      </div>
    )
  }

  return (
    <div className='home-banner-wrapper'>
      {homeBanner}
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
