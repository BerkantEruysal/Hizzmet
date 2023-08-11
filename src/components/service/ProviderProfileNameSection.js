import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import ServiceProviderProfileImage from './ServiceProviderProfileImage';
import RateInfoSummary from './RateInfoSummary';
import UpArrowButton from '../IconButtons/UpArrowButton';

const ProviderProfileNameSection = () => {
  return (
    <View style={styles.mainContainer}>
      <ServiceProviderProfileImage
        stroke
        size={44}></ServiceProviderProfileImage>
      <View style={styles.nameTagWrapper}>
        <Text style={styles.providerName}>Kardeşler Boyacılık</Text>
        <Text style={styles.providerLevel}>2. seviye hizmet veren</Text>
        <RateInfoSummary></RateInfoSummary>
      </View>
      <View style={styles.upArrowWrapper}>
        <UpArrowButton color={colors.text}></UpArrowButton>
      </View>
    </View>
  );
};

export default ProviderProfileNameSection;

const styles = StyleSheet.create({
  mainContainer: {
    height: 70,
    backgroundColor: colors.background,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 14,
  },
  nameTagWrapper: {
    marginLeft: 10,
  },
  providerName: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  providerLevel: {
    color: colors.secondaryText,
    fontSize: 12,
  },
  upArrowWrapper: {
    marginLeft: 'auto',
  },
});
