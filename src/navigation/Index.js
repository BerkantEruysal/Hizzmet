import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceConsumerMain from './ServiceConsumerMain';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ServiceConsumerMain" component={ServiceConsumerMain} />
    </Stack.Navigator>
  )
}

export default Index

