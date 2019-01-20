import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store/index';
import Routes from './routes/index';

// Load css
import './styles/style.scss';

const App = () => (
  <Provider store={store}>
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Routes />
    </Router>
  </Provider>
);

export default App;
