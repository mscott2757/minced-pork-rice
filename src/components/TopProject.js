import * as React from 'react';
import styled from 'styled-components';
import { FullContainer, Space, Flex } from './core/Container';
import { withImageProp } from './utils';
import { Image } from './core/Image';
import { SP, P } from './core/Text';
import { Button } from './core/Button';

const ProjectImage = styled(Image)`
  height: 100%;
`;

const Title = styled(SP)`
  font-weight: bold;
  font-size: 56px;
  line-height: 56px;
`;

const SubTitle = styled(P)`
  font-size: 20px;
  line-height: 30px;
`;

const PageContainer = styled(FullContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  height: 100%;
`;

const Right = styled(Flex)`
  width: 465px;
  padding-top: 20px;
  margin-left: -35px;
  padding-bottom: 15px;
`;

const ButtonText = styled(P)`
  font-size: 20px;
  color: #333;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Project = ({ id, title, description, topImg, tag }) => (
  <PageContainer>
    <Flex height="400px">
      <Left>
        <ProjectImage src={topImg} />
      </Left>
      <Right column>
        <Title>{title}</Title>
        <Space height="20px" />
        <SubTitle>{description}</SubTitle>
        <Space height="28px" />
        <SubTitle>{tag}</SubTitle>
        <Spacer />
        <a href={`/${id}`}>
          <Button>
            <ButtonText>Read More</ButtonText>
          </Button>
        </a>
      </Right>
    </Flex>
  </PageContainer>
);

export const TopProject = withImageProp('topImg')(Project);
