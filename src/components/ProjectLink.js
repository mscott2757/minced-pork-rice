import React from 'react';
import {
  compose,
  withHandlers,
  branch,
  renderComponent,
} from 'recompose';
import { withRouter } from 'react-router-dom'

const ProjectLink = ({
  project: { title },
  type,
  handleClick,
}) => (
 <div onClick={handleClick} className='project-footer__link'>
     <p>{`${type === 'next' ? 'Next' : 'Previous'} project:`}</p>
     <p>{title}</p>
  </div>
);

const enhance = compose(
  withRouter,
  withHandlers({
    handleClick: ({ history, path }) => () => {
      history.push(path);
    },
  }),
  branch(
    ({ project }) => !project || 'externalLink' in project,
    renderComponent(() => <div className='project-footer__link-wrapper' />),
  ),
);

export default enhance(ProjectLink);
