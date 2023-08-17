import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';

const ConsumerProfileImage = ({size = 37}) => {
  return (
    <View style={[styles.mainContainer, {width: 37, height: 37}]}>
      <Image style={styles.image}></Image>
    </View>
  );
};

export default ConsumerProfileImage;

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 100,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
});
