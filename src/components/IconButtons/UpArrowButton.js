import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import UpArrowIcon from '../../assets/icons/upArrowIcon.svg';
import colors from '../../utils/styles/DarkTheme';

const UpArrowButton = ({color}) => {
  return (
    <Pressable onPress={() => {}}>
      <UpArrowIcon style={{color: color}}></UpArrowIcon>
    </Pressable>
  );
};

export default UpArrowButton;

const styles = StyleSheet.create({});
