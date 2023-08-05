import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import MessageButton from '../../assets/icons/messageIcon.svg';
import colors from '../../utils/styles/DarkTheme';

const HomeButton = ({color}) => {
  return (
    <Pressable onPress={() => {}}>
      <MessageButton style={{color: color}}></MessageButton>
    </Pressable>
  );
};

export default HomeButton;

const styles = StyleSheet.create({});
