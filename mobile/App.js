import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import React from 'react';
import { StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Router } from 'react-native-router-flux';

import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import theme from './native-base-theme/variables/commonColor';

import Routes from './routes/index';

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') {
  StatusBar.setHidden(true);
}

const client = new ApolloClient({
  uri: 'https://shielded-reaches-18318.herokuapp.com/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <StyleProvider style={getTheme(theme)}>
      <Router>{Routes}</Router>
    </StyleProvider>
  </ApolloProvider>
);

export default App;
