import React, { Component } from 'react';

const DEFAULT_AVATAR_URL = 'https://pbs.twimg.com/profile_images/745058247757824000/IAZSRYGZ.jpg';

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
