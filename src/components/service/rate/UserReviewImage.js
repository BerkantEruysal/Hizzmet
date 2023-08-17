import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../../../utils/styles/DarkTheme';

const UserReviewImage = () => {
  return (
    <View style={styles.mainContainer}>
      <Image></Image>
    </View>
  );
};

export default UserReviewImage;

const styles = StyleSheet.create({
  mainContainer: {
    width: 100,
    height: 70,
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
});
