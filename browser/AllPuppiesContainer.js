import {connect} from 'react-redux';
import AllPuppies from './AllPuppies';
import fetchAllPups from './action-creators';

const mapStateToProps = function(state) {
  return {
    allPuppies: state.allPuppies
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchAllPups: () => dispatch(fetchAllPups())
  }
}

const allPuppiesContainer = connect(mapStateToProps, mapDispatchToProps);

export default allPuppiesContainer(AllPuppies);
