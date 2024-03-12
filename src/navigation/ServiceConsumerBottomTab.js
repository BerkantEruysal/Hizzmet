import React from 'react';
import ServiceConsumerHome from '../screens/serviceConsumer/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ServiceConsumerHomeHeader from '../components/headers/ServiceConsumerHomeHeader';
import ServiceConsumerTabBar from '../components/headers/ServiceConsumerTabBar';
import ServiceConsumerExplore from './ServiceConsumerExplore';
import {View, Text} from 'react-native';
import ServiceConsumerMessageList from '../screens/serviceConsumer/MessageList';

const Tab = createBottomTabNavigator();

const ServiceConsumerBottomTab = () => {
  return (
    <Tab.Navigator tabBar={props => <ServiceConsumerTabBar {...props} />}>
      <Tab.Screen
        name="ServiceConsumerHome"
        component={ServiceConsumerHome}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ServiceConsumerMessageList"
        component={ServiceConsumerMessageList}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ServiceConsumerExplore"
        component={ServiceConsumerExplore}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default ServiceConsumerBottomTab;
