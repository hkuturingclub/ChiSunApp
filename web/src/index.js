import * as serviceWorker from './serviceWorker';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";

const graphQLURI = process.env.NODE_ENV === "production" ? "https://hkuchisuncollege.herokuapp.com/graphql" : "http://localhost:4000/graphql";

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
