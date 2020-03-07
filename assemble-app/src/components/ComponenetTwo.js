import React, { Component } from 'react';
import '../styles/componenttwo.css';
import { Link } from 'react-router-dom';


class ComponentTwo extends Component {
  constructor(props) {
    super(props);
    this.renderUserList = this.renderUserList.bind(this);
  }

  renderUserList(userList) {
    if (userList) {
      return userList.map((user, index) => {
        return (
          <div className="row" key={index}>
            <div className="rowItem">{user.name}</div>
            <div className="rowItem">{user.username}</div>
            <div className="rowItem">{user.email}</div>
            <div className="rowItem">{user.website}</div>
          </div>
        );
      });
    }
    return <React.Fragment>No Users Found</React.Fragment>;
  }

  render() {
    return (
      <React.Fragment>
        <div className="componentTwoContainer">
          <div className="header">
            <h1>Component Two</h1>
          </div>
          <div className="content">{this.renderUserList(this.props.data)}</div>
          <Link to="/">Home</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default ComponentTwo;
