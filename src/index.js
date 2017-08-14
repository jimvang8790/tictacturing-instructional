import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import Routes from './routes';
import Relay from 'react-relay';
import userRelay from 'react-router-relay';
import {RelayNetworklayer, urlMiddleware} from 'react-relay-networklayer';
import {relayApi} from './config/endpoints';
import auth from './utils/auth'

const createHeaders = () => {
  let idToken = auth.getToken()
  if (idToken) {
    Authorization: `Bearer ${idToken}`
  } else {
    return {}
  }
} // end createHeaders



ReactDOM.render(
  <Router
    history={browserHistory}
    routes={Routes}
   />,
  document.getElementById('root')
) // end ReactDOM.render
