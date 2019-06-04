import { connect } from 'react-redux';
import Project from '../components/Project';
import { getCategory, getProject } from '../selectors';

const mapStateToProps = (state, { match: { params } }) => {
  const category = getCategory(state, params.project);
  return {
    category,
    ...getProject(state, params.project, category.id)
  }
}

const mapDispatchToProps = (state) => {
  return {}
}

const ProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);

export default ProjectContainer;
