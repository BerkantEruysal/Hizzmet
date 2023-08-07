import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import HeartIcon from '../../assets/icons/heartIcon.svg';

const HeartButton = ({style, putBackground, heartColor = '#000'}) => {
  return (
    <View
      style={[
        styles.heartIconWrapper,
        style,
        {backgroundColor: putBackground && '#fff'},
      ]}>
      <HeartIcon style={styles.heartIcon} color={heartColor}></HeartIcon>
    </View>
  );
};

export default HeartButton;

const styles = StyleSheet.create({
  heartIconWrapper: {
    borderRadius: 50,
    padding: 6,
  },
});
