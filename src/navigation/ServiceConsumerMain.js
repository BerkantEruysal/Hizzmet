import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceConsumerBottomTab from './ServiceConsumerBottomTab';
import ServiceConsumerMessageStack from './ServiceConsumerMessageStack';

const Stack = createNativeStackNavigator();
const ServiceConsumerMain = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ServiceConsumerBottomTab"
        component={ServiceConsumerBottomTab}
      />
      <Stack.Screen
        name="ServiceConsumerMessageStack"
        component={ServiceConsumerMessageStack}
      />
    </Stack.Navigator>
  );
};

export default ServiceConsumerMain;
