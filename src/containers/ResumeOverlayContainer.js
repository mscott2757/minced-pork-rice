import { connect } from 'react-redux';
import ResumeOverlay from '../components/ResumeOverlay';
import { toggleResume } from '../actions';

const mapStateToProps = (state) => {
  return {
    ...state.resume
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleResume: () => {
      dispatch(toggleResume());
    }
  }
}

const ResumeOverlayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResumeOverlay);

export default ResumeOverlayContainer;
