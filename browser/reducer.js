import {combineReducers} from 'redux';
import {SHOW_ALL_PUPS, SHOW_ONE_PUP} from './action-creators';

//REDUCERS

function allPupsReducer (state = [], action) {
  switch(action.type) {
    case SHOW_ALL_PUPS:
      return action.allPuppies;

    default:
      return state;
  }
}

function onePupReducer (state = {}, action) {
  switch(action.type) {
    case SHOW_ONE_PUP:
      return action.selectedPuppy;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  allPuppies: allPupsReducer,
  selectedPuppy: onePupReducer
});

export default rootReducer;
