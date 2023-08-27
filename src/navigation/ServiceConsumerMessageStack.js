import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceConsumerMessages from '../screens/serviceConsumer/MessageList';
import MessageDetail from '../screens/serviceConsumer/MessageDetail';

const Stack = createNativeStackNavigator();

const ServiceConsumerMessageStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ServiceConsumerMessageList"
        component={ServiceConsumerMessages}
      />
      <Stack.Screen
        name="ServiceConsumerMessageDetail"
        component={MessageDetail}
      />
    </Stack.Navigator>
  );
};

export default ServiceConsumerMessageStack;

const styles = StyleSheet.create({});
