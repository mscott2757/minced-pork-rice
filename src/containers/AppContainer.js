import { connect } from 'react-redux';
import App from '../App';
import { withRouter } from 'react-router-dom';
import { toggleResume } from '../actions';

const mapStateToProps = ({ resume }) => {
  return {
    resumeVisible: resume.visible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleResume: () => {
      dispatch(toggleResume());
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withRouter(AppContainer);
