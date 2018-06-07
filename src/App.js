import React from 'react';
import { Nav, ScrollToCategories, ScrollToAbout } from './components';
import {
  CategoryContainer,
  ProjectContainer,
  ResumeOverlayContainer,
  HomeContainer,
} from './containers/';
import { Route, Switch } from 'react-router-dom';

const App = ({ resumeVisible, handleToggleResume, nav }) => {
  return (
    <div className={"App " + (resumeVisible ? 'App--no-scroll' : '')}>
      <Nav {...nav} handleToggleResume={handleToggleResume} />
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
