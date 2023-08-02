import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceConsumerBottomTab from './ServiceConsumerBottomTab';

const Stack = createNativeStackNavigator();
const ServiceConsumerMain = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ServiceConsumerBottomTab" component={ServiceConsumerBottomTab} />
    </Stack.Navigator>
  )
}

export default ServiceConsumerMain
