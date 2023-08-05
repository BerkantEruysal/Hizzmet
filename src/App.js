import React from 'react';
import {View, Text, StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './store/store';
import {Provider} from 'react-redux';
import Index from './navigation/Index';
import colors from './utils/styles/DarkTheme';

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
