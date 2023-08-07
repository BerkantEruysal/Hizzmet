import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';

const Category = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Category</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  mainContainer: {
    minWidth: 87,
    height: 27,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    color: colors.primary,
  },
});
