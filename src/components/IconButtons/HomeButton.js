import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import HomeIcon from '../../assets/icons/homeIcon.svg';
import colors from '../../utils/styles/DarkTheme';

const HomeButton = ({color}) => {
  return (
    <Pressable onPress={() => {}}>
      <HomeIcon style={{color: color}}></HomeIcon>
    </Pressable>
  );
};

export default HomeButton;

const styles = StyleSheet.create({});
