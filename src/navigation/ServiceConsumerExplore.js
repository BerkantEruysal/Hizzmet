import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ServiceProviderProfile from '../screens/serviceConsumer/ServiceProviderProfile';

const Stack = createNativeStackNavigator();

const ServiceConsumerExplore = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ServiceProviderProfile"
        component={ServiceProviderProfile}
      />
    </Stack.Navigator>
  );
};

export default ServiceConsumerExplore;
