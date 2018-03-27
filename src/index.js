import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import { AppContainer } from './containers';
import registerServiceWorker from './registerServiceWorker';
import mincedPorkRice from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(mincedPorkRice);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
