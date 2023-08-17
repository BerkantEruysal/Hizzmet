import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../../../utils/styles/DarkTheme';

const SubRateCategory = ({title, rate}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightSectionWrapper}>
        <Image source={require('../../../assets/icons/starIcon.png')}></Image>
        <Text style={styles.rate}>{rate}</Text>
      </View>
    </View>
  );
};

export default SubRateCategory;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  rightSectionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rate: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
});
