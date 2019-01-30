import React, { Component } from 'react';
import { BrowserRouter as Router }  from 'react-router-dom'; 
import Routes from './routes'; 
import "./App.css";
import { Provider } from 'react-redux';
import store from './store'; 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
