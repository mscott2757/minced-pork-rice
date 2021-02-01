import React from 'react';
import styled from 'styled-components';
import { HomeBannerTitle } from './utils';
import { Image } from './utils';
import { P, SH1 } from './core/Text';
import { Space, Flex } from './core/Container';

const Bold = styled(P.withComponent('span'))`
  font-weight: bold;
`;

const BannerWrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 3;
  margin-left: 90px;
  padding-left: 12%;
`;

const SubText = styled(P)`
  font-size: 25px;
`;

const Title = styled(SH1)`
  font-size: 80px;
`;

const SubTitle = styled(SH1)`
  font-size: 46px;
`;

const HomeBanner = ({ handleScroll, titles, bannerImg }) => {
  let homeBanner = null;
  if (bannerImg) {
    homeBanner = <Image className='home-banner-img' src={bannerImg} />;
  }

  return (
    <div className='home-banner-wrapper'>
      {homeBanner}
      <BannerWrapper column justify="center">
        <Title>Hi, I’m Waverly!</Title>
        <SubTitle fontWeight="normal" fontStyle="normal">Strategist by trade, creator at heart</SubTitle>
        <Space height="34px" />
        <SubText>Currently a <Bold>Product Innovation Strategist</Bold> and <Bold>Freelance Designer</Bold>,</SubText>
        <SubText>Previously Strategic Design Business Analyst at Infosys Consulting</SubText>
      </BannerWrapper>
    </div>
  )
}

export default HomeBanner;
