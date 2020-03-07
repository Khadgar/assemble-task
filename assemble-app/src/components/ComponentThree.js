import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ComponentThree extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="componentThreeContainer">
          <div className="header">
            <h1>Component Three</h1>
          </div>
          <div className="content"></div>
          <Link to="/">Home</Link>

        </div>
      </React.Fragment>
    );
  }
}

export default ComponentThree;
