import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';

const ServiceProviderProfileImage = ({size = 28, stroke}) => {
  return (
    <View style={styles.mainContainer(size)}>
      <View style={styles.profileImageWrapper(size, stroke)}>
        <Image></Image>
      </View>
      <View style={styles.profileState(size)}></View>
    </View>
  );
};

export default ServiceProviderProfileImage;

const styles = StyleSheet.create({
  mainContainer: size => {
    return {
      height: size,
      width: size,
    };
  },
  profileImageWrapper: (size, stroke) => {
    return {
      height: size,
      width: size,
      borderRadius: size / 2,
      backgroundColor: colors.primary,
      borderColor: colors.text,
      borderWidth: stroke ? 1 : 0,
    };
  },
  profileState: size => {
    return {
      height: size / 3,
      width: size / 3,
      borderRadius: size / 3,
      backgroundColor: colors.successGreen,
      borderColor: '#fff',
      borderWidth: 1,
      position: 'absolute',
      bottom: 0,
      right: 0,
    };
  },
});
