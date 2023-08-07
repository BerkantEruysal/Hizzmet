import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import HeartButton from '../IconButtons/HeartButton';

const HotProject = ({image}) => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.imageStyle} source={image}></Image>
      <HeartButton putBackground style={styles.heartIconStyle}></HeartButton>
    </View>
  );
};

export default HotProject;

const styles = StyleSheet.create({
  mainContainer: {
    height: 200,
  },
  imageStyle: {
    height: '100%',
    objectFit: 'cover',
  },
  heartIconStyle: {
    position: 'absolute',
    right: 6,
    top: 6,
  },
});
