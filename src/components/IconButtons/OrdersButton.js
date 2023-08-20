import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import OrdersIcon from '../../assets/icons/ordersIcon.svg';
import colors from '../../utils/styles/DarkTheme';

const HomeButton = ({color, onPress}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <OrdersIcon style={{color: color}}></OrdersIcon>
    </Pressable>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  mainContainer: {
    width: 60,
    alignItems: 'center',
  },
});
