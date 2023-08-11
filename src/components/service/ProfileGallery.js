import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';

const ProfileGallery = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mockImage}></View>
      <View style={styles.galleryPhotoCountWrapper}>
        <Text style={styles.galleryPhotoCount}>20 de 1</Text>
      </View>
    </View>
  );
};

export default ProfileGallery;

const styles = StyleSheet.create({
  mainContainer: {
    height: 250,
  },
  mockImage: {
    height: 250,
    backgroundColor: colors.primary,
  },
  galleryPhotoCount: {
    color: colors.text,
    fontSize: 12,
  },
  galleryPhotoCountWrapper: {
    position: 'absolute',
    bottom: 7,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 20,
    height: 25,
    paddingHorizontal: 8,
  },
});
