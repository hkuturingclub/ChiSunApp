import * as serviceWorker from './serviceWorker';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter } from "react-router-dom";

const graphQLURI = `https://hkuchisuncollege.herokuapp.com/graphql`;

const client = new ApolloClient({
  uri: graphQLURI,
  onError: ({ networkError, graphQLErrors }) => {
    if (networkError) console.log(networkError);
    if (graphQLErrors) console.log(graphQLErrors);
  }
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
, document.getElementById('root')
);

serviceWorker.unregister();
