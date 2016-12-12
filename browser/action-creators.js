import axios from 'axios';

//ACTIONS
export const SHOW_ALL_PUPS = 'SHOW_ALL_PUPS';
export const SHOW_ONE_PUP = 'SHOW_ONE_PUP';

//ACTION CREATORS
const showAllPups = pups => ({type: SHOW_ALL_PUPS, allPuppies: pups});
const showOnePup = pup => ({type: SHOW_ONE_PUP, selectedPuppy: pup});

//DISPATCHERS
export const fetchAllPups = () => {
  return dispatch => {
    axios.get('/api/puppies')
    .then(res => res.data)
    .then(pups => dispatch(showAllPups(pups)))
    .catch(console.error);
  }
}

export const fetchOnePup = (id) => {
  return dispatch => {
    axios.get(`/api/puppies/${id}`)
    .then(res => res.data)
    .then(pup => dispatch(showOnePup(pup)))
    .catch(console.error);
  }
}
