import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import mincedPorkRice from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components';

const store = createStore(mincedPorkRice);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
