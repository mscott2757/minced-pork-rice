import React, { Component } from 'react';
import './styles/css/App.css';
import Nav from './components/Nav';
import HomeContainer from './containers/HomeContainer';
import CategoryContainer from './containers/CategoryContainer';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component={null} />
          <Route exact path="/:category?" component={CategoryContainer} />
          <Route exact path="/:category?/:project?" component={null} />
        </Switch>
      </div>
    );
  }
}

export default App;
