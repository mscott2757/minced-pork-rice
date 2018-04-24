import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary';

class Category extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  getPath = (project) => `/${this.props.id}/${project.id}`;

  render() {
    const { title, projects } = this.props;
    return (
      <div className='category'>
        <div className='category__title'>
          <h3>Projects</h3>
          <h2>{title}</h2>
        </div>
        <div className='projects'>
          {projects.map((project) => {
            return <ProjectSummary className='project' {...project} path={this.getPath(project)} key={project.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Category;
