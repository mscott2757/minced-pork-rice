import React from 'react';
import { ScrollToCategories, ScrollToAbout } from './components';
import {
  CategoryContainer,
  NavContainer,
  ProjectContainer,
  ResumeOverlayContainer,
  HomeContainer,
} from './containers/';
import { Route, Switch } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="App">
      <NavContainer />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/projects" component={ScrollToCategories} />
        <Route exact path="/about" component={ScrollToAbout} />
        <Route exact path="/:category?" component={CategoryContainer} />
        <Route exact path="/:category?/:project?" component={ProjectContainer} />
      </Switch>
      <ResumeOverlayContainer />
    </div>
  );
}

export default App;
