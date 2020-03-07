import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homecomponent.css';

class HomeComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="homeContainer">
          <div className="header">
            <h1>Home Component</h1>
          </div>
          <div className="content">
            <Link to="/component-1">Component 1</Link>
            <Link to="/component-2">Component 2</Link>
            <Link to="/component-3">Component 3</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
