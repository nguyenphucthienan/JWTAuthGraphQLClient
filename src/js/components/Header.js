import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-1">
          <a href="#" className="brand-logo left">
            <i className="material-icons">home</i>Auth
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
