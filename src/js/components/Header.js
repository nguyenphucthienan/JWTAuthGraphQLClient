import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderButtons() {
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

export default Header;
