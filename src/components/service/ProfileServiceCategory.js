import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';

const ProfileServiceCategory = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.categoryName}>category</Text>
    </View>
  );
};

export default ProfileServiceCategory;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  categoryName: {
    fontSize: 12,
    color: colors.primary,
  },
});
