import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import ProfileIcon from '../../assets/icons/profileIcon.svg';
import colors from '../../utils/styles/DarkTheme';

const HomeButton = ({color, onPress}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <ProfileIcon style={{color: color}}></ProfileIcon>
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
