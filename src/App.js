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
import ReactGA from 'react-ga';

ReactGA.initialize('UA-85617061-2');

const LogPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return null;
}

const App = (props) => {
  return (
    <div className="App">
      <NavContainer />
      <Route component={LogPageView} />
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
