import React from 'react';
import styled from 'styled-components';
import { Image } from './utils';
import { Space, Flex } from './core/Container';
import { SH2, H3 } from './core/Text';
import ProjectLink from './ProjectLink';

const TitleText = styled(SH2)`
  font-size: 72px;
`;

const Project = ({
  title,
  body,
  category,
  nextProject,
  prevProject,
}) => {
  const getPath = project => project ? `/${category.id}/${project.id}`: null;
  return (
    <div className='project'>
      <div className='project-banner'>
        <div className='project-banner__title'>
          <Space height="50px" />
          <TitleText letterSpacing="1px">{title}</TitleText>
          <a href={`/${category.id}`}>
            <H3 letterSpacing="1px">{category.title}</H3>
          </a>
        </div>
      </div>
      <div className='project-body'>
        {body}
      </div>
      <div className='project-footer'>
        <ProjectLink
           roject={prevProject}
           type='prev'
           path={getPath(prevProject)}
         />
        <ProjectLink
          project={nextProject}
          type='next'
          path={getPath(nextProject)}
        />
      </div>
    </div>
  );
}

export default Project;
