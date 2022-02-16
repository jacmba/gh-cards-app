import React from "react";

export default class Card extends React.Component {
  render() {
    const profile = this.props
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="Avatar" />
        <div className="info">
          <div className="name">{profile.name || profile.login}</div>
          <div className="company">{profile.company || 'Unknown'}</div>
        </div>
      </div>
    );
  }
}
