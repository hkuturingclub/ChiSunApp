import { Provider } from 'react-redux';
import React from 'react';

import "./App.css";
import Routes from './routes';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
