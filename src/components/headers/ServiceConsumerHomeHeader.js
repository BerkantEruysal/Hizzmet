import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import FullLogo from '../logo/FullLogo';
import colors from '../../utils/styles/DarkTheme';
import MapButton from '../IconButtons/MapButton';
import ExploreButton from '../IconButtons/ExploreButton';
import FakeSearcher from '../searchInputs/FakeSearcher';

const ServiceConsumerHomeHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.topPartContainer}>
          <MapButton></MapButton>
          <FullLogo></FullLogo>
          <ExploreButton></ExploreButton>
        </View>
        <View style={styles.bottomPartContainer}>
          <FakeSearcher></FakeSearcher>
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
  safeAreaContainer: {},
  topPartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: 20,
  },
  bottomPartContainer: {},
});
