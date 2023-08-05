import {StyleSheet, Text, View, SafeAreaView, Animated} from 'react-native';
import React from 'react';
import FullLogo from '../logo/FullLogo';
import colors from '../../utils/styles/DarkTheme';
import MapButton from '../IconButtons/MapButton';
import ExploreButton from '../IconButtons/ExploreButton';
import FakeSearcher from '../searchInputs/FakeSearcher';

const ServiceConsumerHomeHeader = ({scrollValue}) => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Animated.View style={styles.topPartContainer(scrollValue)}>
          <MapButton></MapButton>
          <Animated.View style={styles.fullLogoStyle(scrollValue)}>
            <FullLogo></FullLogo>
          </Animated.View>
          <ExploreButton></ExploreButton>
        </Animated.View>
        <View style={styles.bottomPartContainer}>
          <FakeSearcher scrollValue={scrollValue}></FakeSearcher>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ServiceConsumerHomeHeader;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
  },
  topPartContainer: scrollValue => {
    return {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginBottom: scrollValue.interpolate({
        inputRange: [0, 100],
        outputRange: [50, 5],
        extrapolate: 'clamp',
      }),
    };
  },
  bottomPartContainer: {},
  // ı want to create fullLogoStyle class that its opacity decreases when scrollValue increases
  fullLogoStyle: scrollValue => {
    return {
      opacity: scrollValue.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      }),
    };
  },
});
