import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import SearchIcon from '../../assets/icons/searchIcon.svg';
import colors from '../../utils/styles/DarkTheme';

const HomeButton = ({color}) => {
  return (
    <Pressable onPress={() => {}}>
      <SearchIcon style={{color: color}}></SearchIcon>
    </Pressable>
  );
};

export default HomeButton;

const styles = StyleSheet.create({});
