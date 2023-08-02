import React from 'react'
import ServiceProviderHome from '../screens/serviceConsumer/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ServiceConsumerHomeHeader from '../components/headers/ServiceConsumerHomeHeader';

const Tab = createBottomTabNavigator();

const ServiceConsumerBottomTab = () => {
    return (
      <Tab.Navigator >
        <Tab.Screen
          name="ServiceProviderHome"
          component={ServiceProviderHome}
          options={{
            header: (props) => <ServiceConsumerHomeHeader {...props} />,
          }}
        />
      </Tab.Navigator>
    );
  };
  
  export default ServiceConsumerBottomTab;
