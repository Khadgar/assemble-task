import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>404 Page Not Found</h1>
        <Link to="/">Home</Link>

      </React.Fragment>
    );
  }
}

export default NoMatch;
