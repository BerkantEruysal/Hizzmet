import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import MessageButton from '../../assets/icons/messageIcon.svg';
import colors from '../../utils/styles/DarkTheme';

const MessagesButton = ({color, onPress}) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <MessageButton style={{color: color}}></MessageButton>
    </Pressable>
  );
};

export default MessagesButton;

const styles = StyleSheet.create({
  mainContainer: {
    width: 60,
    alignItems: 'center',
  },
});
