import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import requireAuth from './auth/requireAuth';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard';
import UserList from './UserList';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="flex-wrapper">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/register" component={RegisterForm} />
              <Route exact path="/dashboard" component={requireAuth(Dashboard)} />
              <Route exact path="/users" component={requireAuth(UserList)} />
            </Switch>
          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
