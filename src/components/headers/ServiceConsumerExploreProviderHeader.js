import {StyleSheet, Text, View, SafeAreaView, Animated} from 'react-native';
import React from 'react';
import colors from '../../utils/styles/DarkTheme';
import GoBackButton from '../../components/IconButtons/GoBackButton';
import HeartButton from '../IconButtons/HeartButton';
import ShareButton from '../IconButtons/ShareButton';
import CallButton from '../IconButtons/CallButton';

const ServiceConsumerExploreProviderHeader = ({scrollValue}) => {
  return (
    <Animated.View style={styles.mainContainer(scrollValue)}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <GoBackButton></GoBackButton>
        <View style={styles.rightPartContainer}>
          <HeartButton heartColor="#fff"></HeartButton>
          <ShareButton width={24} height={24}></ShareButton>
          <CallButton width={24} height={24}></CallButton>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default ServiceConsumerExploreProviderHeader;

const styles = StyleSheet.create({
  mainContainer: scrollPercentage => {
    return {
      // I want background color to slowley become colored when scrolled to bottom
      backgroundColor: scrollPercentage.interpolate({
        inputRange: [0, 100],
        outputRange: ['rgba(0,0,0,0)', colors.backgroundRgba],
        extrapolate: 'clamp',
      }),
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
    };
  },
  safeAreaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 10,
  },
  rightPartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 21,
    paddingRight: 10,
  },
});
