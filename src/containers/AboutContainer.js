import { connect } from 'react-redux';
import { About } from '../components/';

const mapStateToProps = ({ about }) => {
  return { ...about }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);

export default AboutContainer;
