import {StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import React from 'react';

import colors from '../../utils/styles/DarkTheme';
import HomeButton from '../IconButtons/HomeButton';
import MessageButton from '../IconButtons/MessageButton';
import SearchButton from '../IconButtons/SearchButton';
import OrdersButton from '../IconButtons/OrdersButton';
import ProfileButton from '../IconButtons/ProfileButton';

const ServiceConsumerTabBar = props => {
  const activeState = props.navigation.getState().index;
  const navigation = props.navigation;
  const handlePress = (route, index) => {
    navigation.navigate(route);
  };
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <HomeButton
          onPress={() => handlePress('ServiceConsumerHome', 0)}
          color={activeState == 1 ? colors.primary : colors.text}></HomeButton>
        <MessageButton
          onPress={() => handlePress('ServiceConsumerMessages', 1)}
          color={colors.text}></MessageButton>
        <SearchButton
          onPress={() => handlePress('ServiceConsumerExplore', 2)}
          color={
            activeState == 0 ? colors.primary : colors.text
          }></SearchButton>
        <OrdersButton
          onPress={() => handlePress('ServiceConsumerOrders', 3)}
          color={colors.text}></OrdersButton>
        <ProfileButton
          onPress={() => handlePress('ServiceConsumerProfile', 4)}
          color={colors.text}></ProfileButton>
      </SafeAreaView>
    </View>
  );
};

export default ServiceConsumerTabBar;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.secondaryBackground,
  },
  safeAreaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 10,
  },
});
