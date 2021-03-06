import { connect } from 'react-redux';
import Home from '../components/Home';
import { getCategories } from '../selectors';
import { toggleResume } from '../actions';

const mapStateToProps = (state, ownProps) => {
  const { home, about, resume } = state;
  return {
    home,
    about,
    categories: getCategories(state),
    resume,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleResume: () => {
      dispatch(toggleResume());
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
