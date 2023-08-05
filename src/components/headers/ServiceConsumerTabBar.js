import {StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import React from 'react';

import colors from '../../utils/styles/DarkTheme';
import HomeButton from '../IconButtons/HomeButton';
import MessageButton from '../IconButtons/MessageButton';
import SearchIcon from '../IconButtons/SearchButton';
import OrdersIcon from '../IconButtons/OrdersButton';
import ProfileIcon from '../IconButtons/ProfileButton';

const ServiceConsumerTabBar = props => {
  const activeState = props.navigation.getState().index;
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <HomeButton
          color={activeState == 0 ? colors.primary : colors.text}></HomeButton>
        <MessageButton color={colors.text}></MessageButton>
        <SearchIcon color={colors.text}></SearchIcon>
        <OrdersIcon color={colors.text}></OrdersIcon>
        <ProfileIcon color={colors.text}></ProfileIcon>
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
