import React, { Component } from 'react';
import './styles/css/App.css';
import Nav from './components/Nav';
import HomeBanner from './components/HomeBanner';
import HomeProjects from './components/HomeProjects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HomeBanner />
        <HomeProjects />
      </div>
    );
  }
}

export default App;
