import React from 'react';
import './styles/css/App.css';
import { Nav, Projects, About } from './components';
import { CategoryContainer, ProjectContainer, ResumeOverlayContainer, HomeContainer } from './containers/';
import { Route, Switch } from 'react-router-dom';

const App = ({ resumeVisible, handleToggleResume, navProps }) => {
  return (
    <div className={"App " + (resumeVisible ? 'App--no-scroll' : '')}>
      <Nav {...navProps} handleToggleResume={handleToggleResume} />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/:category?" component={CategoryContainer} />
        <Route exact path="/:category?/:project?" component={ProjectContainer} />
      </Switch>
      <ResumeOverlayContainer />
    </div>
  );
}

export default App;
