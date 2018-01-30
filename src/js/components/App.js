import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import LoginForm from './LoginForm';

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
            </Switch>
          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
