import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = ({ resume }) => {
  return {
    resumeVisible: resume.visible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
