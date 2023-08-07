import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ServiceProviderProfileImage from './ServiceProviderProfileImage';
import colors from '../../utils/styles/DarkTheme';
import HeartButton from '../IconButtons/HeartButton';
import RateInfoSummary from './RateInfoSummary';

const MiniServiceProvider = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.serviceProviderImageWrapper}>
        <Image style={styles.serviceProviderImage}></Image>
      </View>
      <View style={styles.bottomHalf}>
        <View style={styles.providerCredentialsContainer}>
          <ServiceProviderProfileImage></ServiceProviderProfileImage>
          <View style={styles.providerNameWrapper}>
            <Text style={styles.providerName}>Kardeşler Boyacılık</Text>
            <Text style={styles.providerLevel}>2. seviye hizmet veren</Text>
          </View>
          <View style={styles.heartWrapper}>
            <HeartButton heartColor="#fff"></HeartButton>
          </View>
        </View>
        <Text style={styles.providerDescriptionText}>
          Ev boyama, duvara resim işleme, modern boyama resim işleme, modern
          boyama
        </Text>
        <View style={styles.rateInfoSummaryWrapper}>
          <RateInfoSummary></RateInfoSummary>
        </View>
      </View>
    </View>
  );
};

export default MiniServiceProvider;

const styles = StyleSheet.create({
  mainContainer: {
    width: 268,
    backgroundColor: colors.background,
    borderRadius: 6,
  },
  serviceProviderImageWrapper: {
    height: 170,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  serviceProviderImage: {
    height: '100%',
  },
  providerCredentialsContainer: {
    marginTop: 14,
    paddingHorizontal: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  providerName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.text,
  },
  providerLevel: {
    fontSize: 10,
    color: colors.secondaryText,
  },
  providerNameWrapper: {
    marginLeft: 10,
  },
  heartWrapper: {
    marginLeft: 'auto',
  },
  providerDescriptionText: {
    marginTop: 12,
    paddingHorizontal: 9,
    fontSize: 12,
    color: colors.text,
  },
  rateInfoSummaryWrapper: {
    marginTop: 12,
    paddingHorizontal: 9,
    marginBottom: 11,
  },
});
