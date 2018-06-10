import React from 'react';
import { render } from 'react-snapshot';
import './styles/css/index.css';
import { AppContainer } from './containers';
import registerServiceWorker from './registerServiceWorker';
import mincedPorkRice from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components';

const store = createStore(mincedPorkRice);

render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <AppContainer />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
