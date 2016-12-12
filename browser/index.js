'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { fetchAllPups, fetchOnePup } from './action-creators';
import store from './store';

const onEnterAllPups = () => {
  store.dispatch(fetchAllPups());
}

const onEnterOnePup = (nextRouterState) => {
  const puppyId = nextRouterState.params.puppyId;
  store.dispatch(fetchOnePup(puppyId));
}

ReactDOM.render(
  <Provider store={store}>
    <div className="container flexbox-container">
      <div className="jumbotron">
        <Router history={hashHistory}>
          <Route path="/">
            <Route path="puppies" component={AllPuppiesContainer} onEnter={onEnterAllPups} />
            <Route path="puppies/:puppyId" component={SinglePuppyContainer} onEnter={onEnterOnePup} />
            <IndexRoute component={AllPuppiesContainer} onEnter={onEnterAllPups} />
          </Route>
        </Router>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
