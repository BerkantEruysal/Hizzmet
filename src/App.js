import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store/store'
import { Provider } from 'react-redux'
import Index from './navigation/Index';

function App() {
  return (
    <Provider store={store}>
     <NavigationContainer>
        <Index></Index>
     </NavigationContainer>
    </Provider>
  );
}

export default App;
