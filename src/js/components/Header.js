import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser';
import Logout from '../mutation/Logout';

class Header extends Component {
  constructor() {
    super();
    this.onLogout = this.onLogout.bind(this);
  }

  async onLogout() {
    await localStorage.removeItem('token');

    this.props.mutate({
      refetchQueries: [{ query: CurrentUser }]
    });
  }

  renderButtons() {
    const { user, loading } = this.props.data;

    if (loading) {
      return <div />;
    }

    if (user) {
      return (
        <li><a onClick={this.onLogout}>Logout</a></li>
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

export default graphql(CurrentUser)(graphql(Logout)(Header));
