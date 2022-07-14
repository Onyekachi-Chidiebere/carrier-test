/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import Home from './src/screens/home/Home';
import { API_URL } from './src/config/util';

const client = new ApolloClient({
  uri:API_URL+'/graphql',
  cache: new InMemoryCache(),
})

const App = () => {
  return <ApolloProvider client={client}>
            <Home />
        </ApolloProvider>;
};



export default App;
