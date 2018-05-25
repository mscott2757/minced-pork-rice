import { connect } from 'react-redux';
import { Category } from '../components/';
import { getCategory } from '../selectors';

const mapStateToProps = (state, { match: { params } }) => {
  return {
    ...getCategory(state, params.category)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const CategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);

export default CategoryContainer;
