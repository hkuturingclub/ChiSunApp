import "./App.css";
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router }  from 'react-router-dom'; 
import React, { Component } from 'react';
import Routes from './routes';
import store from './store'; 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={`${process.env.PUBLIC_URL}/`}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
