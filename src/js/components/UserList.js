import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import GetUsers from '../queries/GetUsers';

import UserCard from './UserCard';

class UserList extends Component {
  render() {
    if (this.props.data.loading) {
      return <div />;
    }

    return (
      <div className="row center-align">
        <h5>Users</h5>
        <div className="col l4 offset-l4 m8 offset-m2 s10 offset-s1">
          {
            this.props.data.users.map(user => (
              <UserCard key={user.id} userInfo={user} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default graphql(GetUsers)(UserList);
