import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser';
import Login from '../mutation/Login';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { username: '', password: '', errors: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.data.user) {
      this.props.history.push('/dashboard');
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.mutate({
      variables: { username, password }
    })
      .then(({ data }) => {
        const { token } = data.login;
        localStorage.setItem('token', token);

        this.props.data.refetch();
      })
      .catch((res) => {
        const errors = res.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div className="row center-align">
        <h5>Login</h5>
        <form className="col l4 offset-l4 m8 offset-m2 s10 offset-s1" onSubmit={this.onSubmit}>
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
          <button className="btn red darken-1">Login</button>
        </form>
      </div>
    );
  }
}

export default withRouter(compose(
  graphql(CurrentUser),
  graphql(Login)
)(LoginForm));
