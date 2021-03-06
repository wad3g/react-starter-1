import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import DashboardPage from './pages/Dashboard';
import ExampleOtherPage from './pages/Other';
import FourOhFourPage from './pages/404';

import Header from './components/Header';

import configureStore from './store';
import injections from './injections';
import { setGlobalStyles, Root } from './styles';

const store = configureStore();
const history = injections.createHistory();

class App extends Component {
  componentWillMount() {
    setGlobalStyles();
  }

  render() {
    return (
      <Provider store={store}>
        <Root>
          <Header />
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/other" component={ExampleOtherPage} />
              <Route component={FourOhFourPage} />
            </Switch>
          </ConnectedRouter>
        </Root>
      </Provider>
    );
  }
}

export default App;
