import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  // options go here

  //to specify the location of our GraphQL server.
  uri: 'http://localhost:4000', 

  //in-memory cache...store and reuse query results 
  cache: new InMemoryCache(),
});



ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
)
