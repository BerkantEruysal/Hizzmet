import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceConsumerMain from './ServiceConsumerMain';
import {StatusBar, Platform} from 'react-native';

const Stack = createNativeStackNavigator();

const Index = () => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    Platform.OS === 'android' &&
      StatusBar.setBackgroundColor(colors.background);
  }, []);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ServiceConsumerMain"
        component={ServiceConsumerMain}
      />
    </Stack.Navigator>
  );
};

export default Index;
