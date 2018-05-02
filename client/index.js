import React      from   'react';
import ReactDOM   from   'react-dom';
import { Router } from   'react-router-dom';
import { Provider } from 'react-redux';

import App     from './app.jsx';
import history from './history';
import store   from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
