import { connect } from 'react-redux';
import Home from '../components/Home';
import { getCategories } from '../selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.home,
    categories: getCategories(state),
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
