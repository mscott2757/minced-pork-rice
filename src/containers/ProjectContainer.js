import { connect } from 'react-redux';
import Project from '../components/Project';
import { getCategory, getProject } from '../selectors';

const mapStateToProps = (state, { match: { params } }) => {
  return {
    category: {
      ...getCategory(state, params.category)
    },
    ...getProject(state, params.project)
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
