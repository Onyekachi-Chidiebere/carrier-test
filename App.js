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

const client = new ApolloClient({
  uri:'http:localhost:4000',
  cache: new InMemoryCache(),
})

const App = () => {
  return <ApolloProvider client={client}>
            <Home />
        </ApolloProvider>;
};



export default App;
