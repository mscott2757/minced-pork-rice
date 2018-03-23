import React, { Component } from 'react';
import './styles/css/App.css';
import Nav from './components/Nav';
import HomeContainer from './containers/HomeContainer';
import CategoryContainer from './containers/CategoryContainer';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/categories/:category?" component={CategoryContainer} />
        <Route exact path="/categories/:category?/:project?" component={null} />
      </div>
    );
  }
}

export default App;
