import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.home,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
