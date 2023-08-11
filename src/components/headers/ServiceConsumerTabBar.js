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
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <HomeButton
          color={activeState == 1 ? colors.primary : colors.text}></HomeButton>
        <MessageButton color={colors.text}></MessageButton>
        <SearchButton
          color={
            activeState == 0 ? colors.primary : colors.text
          }></SearchButton>
        <OrdersButton color={colors.text}></OrdersButton>
        <ProfileButton color={colors.text}></ProfileButton>
      </SafeAreaView>
    </View>
  );
};

export default ServiceConsumerTabBar;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
  },
  safeAreaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 10,
  },
});
