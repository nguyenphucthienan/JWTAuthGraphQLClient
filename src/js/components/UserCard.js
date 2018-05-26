import React, { Component } from 'react';

const DEFAULT_AVATAR_URL = 'https://i.imgur.com/bkP3uwj.jpg';

class UserCard extends Component {
  render() {
    const { username } = this.props.userInfo;

    return (
      <div className="card horizontal z-depth-1">
        <div className="valign-wrapper">
          <img className="user-card-avatar" src={DEFAULT_AVATAR_URL} alt="avatar" />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p className="user-card-username">{username}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
