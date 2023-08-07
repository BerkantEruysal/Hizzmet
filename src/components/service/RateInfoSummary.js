import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarIcon from '../../assets/icons/starIcon.svg';
import colors from '../../utils/styles/DarkTheme';

const RateInfoSummary = () => {
  return (
    <View style={styles.mainContainer}>
      <StarIcon></StarIcon>
      <Text style={styles.rateText}>4.8</Text>
      <Text style={styles.countText}>(21.6b)</Text>
    </View>
  );
};

export default RateInfoSummary;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.yellow,
    marginLeft: 2,
  },
  countText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.secondaryText,
    marginLeft: 4,
  },
});
