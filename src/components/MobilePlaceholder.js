import * as React from 'react';
import styled from 'styled-components';
import { FixedContainer, Space, P, SH3, SH1 } from './core';

export const MediaQuery = ({ query, children }) => {
  if (window.matchMedia(query).matches) {
    return children;
  }
  return null;
}

const Wrapper = styled.div`
  padding: 60px 35px;
`;

export const MobilePlaceholder = () => (
  <FixedContainer>
    <Wrapper>
      <SH1>Oops!</SH1>
      <Space height="16px" />
      <P>The mobile version of my website is still under construction</P>
      <Space height="16px" />
      <P>Please view on a desktop</P>
      <Space height="40px" />
      <P>My sincere apologies,</P>
      <SH3>Waverly</SH3>
    </Wrapper>
  </FixedContainer>
);
