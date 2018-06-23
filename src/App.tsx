import * as React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ImplicitCallback, Security } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-380192.oktapreview.com/oauth2/default',
  redirectUri: 'https://dev-380192.oktapreview.com/login/login.htm?fromURI=/oauth2/v1/authorize/redirect?okta_key=QxU8Y_jfv1t1q_GE4-VSH6RP0rnIPfmhnWIDPHGnrrU',
  // window.location.origin + '/implicit/callback',
  clientId: '0oaf4lvtrs4NfXz330h7'
};

export interface Auth {
  login(path: string): {};
  logout(): {};
  isAuthenticated(): boolean;
  getAccessToken(): string;
}

class App extends React.Component {

  render() {
    return (
      <Router>
        <Security
          issuer={config.issuer}
          client_id={config.clientId}
          redirect_uri={config.redirectUri}
        >
          <Route path="/" exact={true} component={Home}/>
          <Route path="/implicit/callback" component={ImplicitCallback}/>
        </Security>
      </Router>
    );
  }
}

export default App;