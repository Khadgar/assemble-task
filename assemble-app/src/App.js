import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/app.css';
import HomeComponent from './components/HomeComponent';
import NoMatch from './components/NoMatch';

import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponenetTwo';
import ComponentThree from './components/ComponentThree';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: null };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  fetchData() {
    fetch(`${window.location.protocol}//jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="mainContainer">
          <Switch>
            <Route
              path="/"
              exact
              render={props => <HomeComponent {...props} data={this.state.users} />}
            />
            <Route
              path="/component-1"
              render={props => (
                <ComponentOne {...props} data={this.state.users} handleUserFetch={this.fetchData} />
              )}
            />
            <Route
              path="/component-2"
              render={props => <ComponentTwo {...props} data={this.state.users} />}
            />
            <Route
              path="/component-3"
              render={props => <ComponentThree {...props} data={this.state.users} />}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
