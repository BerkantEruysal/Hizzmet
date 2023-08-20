import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import HomeIcon from '../../assets/icons/homeIcon.svg';
import colors from '../../utils/styles/DarkTheme';

const HomeButton = ({color, onPress}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <HomeIcon style={{color: color}}></HomeIcon>
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
