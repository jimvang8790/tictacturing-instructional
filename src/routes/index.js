import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Template from '../containers/Template';
import TicTacToe from '../containers/TicTacToe';
import Profile from '../containers/Profile';
import Relay from 'react-relay';

const ViewQueries = {
  viewer: () => Relay.QL`query { viewer}`
} // end of ViewQueries

const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
      queries={ViewQueries}
    >
    <IndexRoute
      component={TicTacToe}
      queries={ViewQueries}
    />
    <Route
      path={'/profile'}
      component={Profile}
      queries={ViewQueries}
    />
    </Route>
  )
} // end createRoutes

const Routes = createRoutes()
export default Routes
