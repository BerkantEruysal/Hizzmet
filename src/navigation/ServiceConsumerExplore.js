import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../screens/serviceConsumer/Search';
import ServiceProviderProfile from '../screens/serviceConsumer/ServiceProviderProfile';

const Stack = createNativeStackNavigator();

const ServiceConsumerExplore = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={Search}></Stack.Screen>
      <Stack.Screen
        name="ServiceProviderProfile"
        component={ServiceProviderProfile}
      />
    </Stack.Navigator>
  );
};

export default ServiceConsumerExplore;
