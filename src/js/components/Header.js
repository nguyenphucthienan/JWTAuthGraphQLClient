import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser';
import GetUsers from '../queries/GetUsers';
import Logout from '../mutation/Logout';

class Header extends Component {
  constructor() {
    super();
    this.onLogout = this.onLogout.bind(this);
  }

  async onLogout() {
    await localStorage.removeItem('token');

    this.props.mutate({
      refetchQueries: [
        { query: CurrentUser },
        { query: GetUsers }
      ]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
      return <div />;
    }

    if (user) {
      return (
        <div>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><a onClick={this.onLogout}>Logout</a></li>
        </div>
      );
    }

    return (
      <div>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </div>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-1">
          <Link to="/" className="brand-logo">
            <i className="material-icons">home</i>Auth
          </Link>

          <a data-activates="nav-mobile" className="button-collapse pointer-cursor">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            {this.renderButtons()}
          </ul>
          <ul className="side-nav" id="nav-mobile">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default compose(
  graphql(CurrentUser),
  graphql(Logout)
)(Header);
