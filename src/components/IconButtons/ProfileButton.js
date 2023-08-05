import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import ProfileIcon from '../../assets/icons/profileIcon.svg';
import colors from '../../utils/styles/DarkTheme';

const HomeButton = ({color}) => {
  return (
    <Pressable onPress={() => {}}>
      <ProfileIcon style={{color: color}}></ProfileIcon>
    </Pressable>
  );
};

export default HomeButton;

const styles = StyleSheet.create({});
