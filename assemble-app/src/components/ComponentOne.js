import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/componentone.css';

class ComponentOne extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="componentOneContainer">
          <div className="header">
            <h1>Component One</h1>
          </div>
          <div className="content">
            <div
              className="getUserListBtn"
              onClick={() => {
                this.props.handleUserFetch();
              }}
            >
              Get Users
            </div>
            <Link to="/component-2">Component 2</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ComponentOne;
