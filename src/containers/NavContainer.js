import { connect } from 'react-redux';
import { Nav } from '../components/';
import { withRouter } from 'react-router-dom';
import { getNavCategories } from '../selectors';

const mapStateToProps = (state) => {
  return {
    ...state.nav,
    categories: getNavCategories(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default withRouter(NavContainer);
