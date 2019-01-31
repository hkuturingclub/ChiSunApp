import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import { Platform, StatusBar } from 'react-native';
import { Router } from 'react-native-router-flux';
import React from 'react';

import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import theme from './native-base-theme/variables/commonColor';

import { Constants } from "expo";

import Routes from './routes/index';
const { manifest } = Constants;

const graphQLURI = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? `http://${manifest.debuggerHost.split(":").shift()}:4000/graphql`
  : `https://quiet-sea-90084.herokuapp.com/graphql`;

StatusBar.setHidden(false);

const client = new ApolloClient({
  uri: graphQLURI,
  onError: ({ networkError, graphQLErrors }) => {
    if (networkError) console.log(networkError);
    if (graphQLErrors) console.log(graphQLErrors);
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <StyleProvider style={getTheme(theme)}>
      <Router>{Routes}</Router>
    </StyleProvider>
  </ApolloProvider>
);

export default App;
