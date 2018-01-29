import React, { Component } from 'react';

import LoginForm from './LoginForm';

class App extends Component {
  render() {
    return (
      <div className="flex-wrapper">
        <main>
          <LoginForm />
        </main>
      </div>
    );
  }
}

export default App;
