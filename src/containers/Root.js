import React from 'react';
import { PropTypes } from 'prop-types'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Home from '../components/home/Home';
import Report from '../components/reports/Report';
import NotFoundRoute from '../components/error/NotFoundRoute';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <Route path="/Report" component={Report} />
        <Route path="/Home" component={Home} />
      </Route>
      <Route path="*" component={NotFoundRoute} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;