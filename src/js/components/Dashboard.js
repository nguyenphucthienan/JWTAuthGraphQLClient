import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser';

class Dashboard extends Component {
  render() {
    return (
      <div className="row center-align">
        <h5>Dashboard</h5>
        <p>{`Hello, ${this.props.data.user ? this.props.data.user.username : ''}`}</p>
        <ul className="col l4 offset-l4 m8 offset-m2 s10 offset-s1 collection with-header z-depth-1">
          <li className="collection-header"><h5 className="flow-text">Technology Stack</h5></li>
          <li className="collection-item"><div>Express<a href="https://expressjs.com/" target="_blank" className="secondary-content"><i className="material-icons blue-text text-darken-1">send</i></a></div></li>
          <li className="collection-item"><div>MongoDB<a href="https://www.mongodb.com/" target="_blank" className="secondary-content"><i className="material-icons blue-text text-darken-1">send</i></a></div></li>
          <li className="collection-item"><div>React<a href="https://reactjs.org/" target="_blank" className="secondary-content"><i className="material-icons blue-text text-darken-1">send</i></a></div></li>
          <li className="collection-item"><div>Apollo<a href="https://www.apollographql.com/" target="_blank" className="secondary-content"><i className="material-icons blue-text text-darken-1">send</i></a></div></li>
        </ul>
      </div>
    );
  }
}

export default graphql(CurrentUser)(Dashboard);
