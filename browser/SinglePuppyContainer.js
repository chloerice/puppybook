import { connect } from 'react-redux';
import SinglePuppy from './SinglePuppy';
import { fetchOnePup } from './action-creators';

const mapStateToProps = function(state) {
  return {
    selectedPuppy: state.selectedPuppy
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchOnePup: (puppyId) => {
      dispatch(fetchOnePuppy(puppyId))
    }
  }
}

const singlePuppyContainer = connect(mapStateToProps, mapDispatchToProps);

export default singlePuppyContainer(SinglePuppy);
