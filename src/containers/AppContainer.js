import { connect } from 'react-redux';
import App from '../App';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ resume, nav }) => {
  return {
    resumeVisible: resume.visible,
    nav
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withRouter(AppContainer);
