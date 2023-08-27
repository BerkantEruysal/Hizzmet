import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Pressable,
} from 'react-native';
import React, {useRef} from 'react';
import FullLogo from '../logo/FullLogo';
import colors from '../../utils/styles/DarkTheme';
import MapButton from '../IconButtons/MapButton';
import ExploreButton from '../IconButtons/ExploreButton';
import FakeSearcher from '../searchInputs/FakeSearcher';

const ServiceConsumerHomeHeader = ({scrollValue, handleSearcherPress}) => {
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
        <View style={styles.searcherWrapper}>
          <Pressable onPress={handleSearcherPress}>
            <FakeSearcher scrollValue={scrollValue}></FakeSearcher>
          </Pressable>
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

  fullLogoStyle: scrollValue => {
    return {
      opacity: scrollValue.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      }),
    };
  },
  searcherWrapper: {
    flexDirection: 'row',
  },
  cancelWrapper: animation => {
    return {
      opacity: 0,
    };
  },
  cancelText: {
    color: colors.text,
  },
});
