import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';

const RateInfoSummary = ({width = 16, height = 16}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={{width, height}}
        source={require('../../assets/icons/starIcon.png')}></Image>
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
