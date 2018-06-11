import { connect } from 'react-redux';
import { Nav } from '../components/';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ nav }) => {
  return {
    ...nav
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
