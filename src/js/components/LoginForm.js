import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Login from '../mutation/Login';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { username: '', password: '', errors: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.mutate({
      variables: { username, password },
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="row center-align">
        <h5>Login</h5>
        <form className="col m6 offset-m3 s8 offset-s2" onSubmit={this.onSubmit}>
          <div className="input-field">
            <input
              placeholder="Username"
              value={this.state.username}
              onChange={event => this.setState({ username: event.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={event => this.setState({ password: event.target.value })}
            />
          </div>
          <div className="errors">
            {
              this.state.errors.map(error => (
                <div key={error}>{error}</div>
              ))
            }
          </div>
          <button className="btn red darken-2">Login</button>
        </form>
      </div>
    );
  }
}

export default graphql(Login)(LoginForm);
